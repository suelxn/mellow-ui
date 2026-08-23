import { describe, expect, test, vi } from 'vitest';

import { composeEventHandlers } from './composeEventHandlers';

function fakeEvent(defaultPrevented = false) {
  return { defaultPrevented } as { defaultPrevented: boolean };
}

describe('composeEventHandlers', () => {
  test('chama os dois handlers, na ordem: original primeiro, depois o nosso', () => {
    const calls: string[] = [];
    const original = vi.fn(() => calls.push('original'));
    const ours = vi.fn(() => calls.push('ours'));

    composeEventHandlers(original, ours)(fakeEvent());

    expect(calls).toEqual(['original', 'ours']);
  });

  test('não chama o segundo handler se o primeiro marcar defaultPrevented', () => {
    const original = vi.fn((event: { defaultPrevented: boolean }) => {
      event.defaultPrevented = true;
    });
    const ours = vi.fn();

    composeEventHandlers(original, ours)(fakeEvent());

    expect(original).toHaveBeenCalledOnce();
    expect(ours).not.toHaveBeenCalled();
  });

  test('funciona quando o handler original está ausente', () => {
    const ours = vi.fn();

    expect(() => composeEventHandlers(undefined, ours)(fakeEvent())).not.toThrow();
    expect(ours).toHaveBeenCalledOnce();
  });

  test('funciona quando o nosso handler está ausente', () => {
    const original = vi.fn();

    expect(() => composeEventHandlers(original, undefined)(fakeEvent())).not.toThrow();
    expect(original).toHaveBeenCalledOnce();
  });

  test('funciona quando o evento já chega com defaultPrevented true', () => {
    const original = vi.fn();
    const ours = vi.fn();

    composeEventHandlers(original, ours)(fakeEvent(true));

    expect(original).toHaveBeenCalledOnce();
    expect(ours).not.toHaveBeenCalled();
  });
});
