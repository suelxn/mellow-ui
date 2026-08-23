import { describe, expect, test, vi } from 'vitest';

import { mergeProps } from './mergeProps';

describe('mergeProps', () => {
  test('concatena className do slot e do filho', () => {
    const result = mergeProps({ className: 'slot' }, { className: 'child' });

    expect(result.className).toBe('slot child');
  });

  test('style mescla os dois objetos, com o filho vencendo em conflito', () => {
    const result = mergeProps(
      { style: { color: 'red', fontSize: 12 } },
      { style: { color: 'blue' } },
    );

    expect(result.style).toEqual({ color: 'blue', fontSize: 12 });
  });

  test('handlers on* (função nos dois lados) são compostos, não sobrescritos', () => {
    const calls: string[] = [];
    const slotOnClick = vi.fn(() => calls.push('slot'));
    const childOnClick = vi.fn(() => calls.push('child'));

    const result = mergeProps({ onClick: slotOnClick }, { onClick: childOnClick });
    (result.onClick as (event: unknown) => void)({ defaultPrevented: false });

    expect(calls).toEqual(['slot', 'child']);
  });

  test('handler on* presente só no filho não é "composto" (não existe o que compor) — usa o do filho', () => {
    const childOnClick = vi.fn();

    const result = mergeProps({}, { onClick: childOnClick });
    (result.onClick as (event: unknown) => void)({ defaultPrevented: false });

    expect(childOnClick).toHaveBeenCalledOnce();
  });

  test('props comuns (não className/style/handler): o valor do filho sobrescreve o do slot', () => {
    const result = mergeProps({ 'data-variant': 'solid' }, { 'data-variant': 'outline' });

    expect(result['data-variant']).toBe('outline');
  });

  test('props presentes só no slot são preservadas', () => {
    const result = mergeProps({ id: 'slot-id' }, { className: 'child' });

    expect(result.id).toBe('slot-id');
  });

  test('propriedade que começa com "on" mas não é função nos dois lados não é composta', () => {
    // onLine, por exemplo, poderia ser um valor qualquer que não seja handler — a regra só
    // compõe quando AMBOS os lados são funções.
    const result = mergeProps({ onLine: 'slot-value' }, { onLine: 'child-value' });

    expect(result.onLine).toBe('child-value');
  });
});
