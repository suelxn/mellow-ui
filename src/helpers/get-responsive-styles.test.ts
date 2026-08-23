import { describe, expect, test } from 'vitest';

import { getResponsiveStyles } from './get-responsive-styles';

const propValues = ['0', '1', '2', '3', '4'];

describe('getResponsiveStyles', () => {
  test('valor fixo dentro da escala gera só a classe base, sem custom property', () => {
    const [classNames, customProperties] = getResponsiveStyles({
      className: 'mui-r-m',
      customProperties: ['--m'],
      propValues,
      value: '4',
    });

    expect(classNames).toBe('mui-r-m-4');
    expect(customProperties).toBeUndefined();
  });

  test('valor arbitrário (fora da escala) gera a classe base sem sufixo + a custom property', () => {
    const [classNames, customProperties] = getResponsiveStyles({
      className: 'mui-r-m',
      customProperties: ['--m'],
      propValues,
      value: '37px',
    });

    expect(classNames).toBe('mui-r-m');
    expect(customProperties).toEqual({ '--m': '37px' });
  });

  test('objeto responsivo com valores de escala gera classes prefixadas por breakpoint (initial sem prefixo)', () => {
    const [classNames] = getResponsiveStyles({
      className: 'mui-r-m',
      customProperties: ['--m'],
      propValues,
      value: { initial: '2', md: '4' },
    });

    expect(classNames).toBe('mui-r-m-2 md:mui-r-m-4');
  });

  test('objeto responsivo com valor arbitrário num breakpoint gera custom property sufixada com o breakpoint', () => {
    const [, customProperties] = getResponsiveStyles({
      className: 'mui-r-m',
      customProperties: ['--m'],
      propValues,
      value: { md: '37px' },
    });

    expect(customProperties).toEqual({ '--m-md': '37px' });
  });

  test('múltiplas custom properties (ex.: mx = --ml e --mr) recebem o mesmo valor arbitrário', () => {
    const [, customProperties] = getResponsiveStyles({
      className: 'mui-r-mx',
      customProperties: ['--ml', '--mr'],
      propValues,
      value: '37px',
    });

    expect(customProperties).toEqual({ '--ml': '37px', '--mr': '37px' });
  });

  test('valor undefined não gera nem classe nem custom property', () => {
    const [classNames, customProperties] = getResponsiveStyles({
      className: 'mui-r-m',
      customProperties: ['--m'],
      propValues,
      value: undefined,
    });

    expect(classNames).toBeUndefined();
    expect(customProperties).toBeUndefined();
  });
});
