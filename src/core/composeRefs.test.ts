import { describe, expect, test, vi } from 'vitest';

import { composeRefs } from './composeRefs';

describe('composeRefs', () => {
  test('chama refs do tipo callback com o mesmo valor', () => {
    const callbackRef = vi.fn();
    const composed = composeRefs(callbackRef);

    composed('node' as unknown as null);

    expect(callbackRef).toHaveBeenCalledWith('node');
  });

  test('atribui refs do tipo objeto (.current) com o mesmo valor', () => {
    const objectRef = { current: null };
    const composed = composeRefs(objectRef);

    composed('node' as unknown as null);

    expect(objectRef.current).toBe('node');
  });

  test('ignora refs undefined sem lançar erro', () => {
    const callbackRef = vi.fn();
    const composed = composeRefs(callbackRef, undefined);

    expect(() => composed('node' as unknown as null)).not.toThrow();
    expect(callbackRef).toHaveBeenCalledWith('node');
  });

  test('mescla múltiplos refs (callback + objeto) simultaneamente', () => {
    const callbackRef = vi.fn();
    const objectRef = { current: null };
    const composed = composeRefs(callbackRef, objectRef);

    composed('node' as unknown as null);

    expect(callbackRef).toHaveBeenCalledWith('node');
    expect(objectRef.current).toBe('node');
  });

  test('a limpeza (cleanup) chama a função de cleanup retornada por refs callback (React 19)', () => {
    const cleanupFn = vi.fn();
    const callbackRef = vi.fn(() => cleanupFn);
    const composed = composeRefs(callbackRef);

    const cleanup = composed('node' as unknown as null);
    cleanup?.();

    expect(cleanupFn).toHaveBeenCalledOnce();
  });

  test('a limpeza zera refs do tipo objeto (.current = null)', () => {
    const objectRef = { current: null };
    const composed = composeRefs(objectRef);

    const cleanup = composed('node' as unknown as null);
    cleanup?.();

    expect(objectRef.current).toBeNull();
  });

  test('a limpeza chama de novo um ref callback que não retornou cleanup, passando null', () => {
    const callbackRef = vi.fn();
    const composed = composeRefs(callbackRef);

    const cleanup = composed('node' as unknown as null);
    callbackRef.mockClear();
    cleanup?.();

    expect(callbackRef).toHaveBeenCalledWith(null);
  });
});
