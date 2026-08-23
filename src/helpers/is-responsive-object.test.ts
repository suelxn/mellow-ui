import { describe, expect, test } from 'vitest';

import { isResponsiveObject } from './is-responsive-object';

describe('isResponsiveObject', () => {
  test('retorna true para um objeto com pelo menos uma chave de breakpoint válida', () => {
    expect(isResponsiveObject({ sm: 'a' })).toBe(true);
    expect(isResponsiveObject({ initial: 'a', lg: 'b' })).toBe(true);
  });

  test('retorna false para um valor de string simples (não responsivo)', () => {
    expect(isResponsiveObject('4')).toBe(false);
  });

  test('retorna false para undefined', () => {
    expect(isResponsiveObject(undefined)).toBe(false);
  });

  test('retorna false para um objeto sem nenhuma chave de breakpoint reconhecida', () => {
    expect(isResponsiveObject({ foo: 'bar' } as never)).toBe(false);
  });

  test('retorna false para null', () => {
    expect(isResponsiveObject(null as never)).toBe(false);
  });
});
