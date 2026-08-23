import { describe, expect, test } from 'vitest';

import { extractProps } from './extract-props';

import type { PropDef } from '../props/prop-def';

const enumPropDef = {
  variant: {
    type: 'enum',
    className: 'mui-variant',
    values: ['solid', 'outline'] as const,
    default: 'solid',
  } satisfies PropDef<'solid' | 'outline'>,
};

const responsiveEnumPropDef = {
  variant: {
    ...enumPropDef.variant,
    responsive: true,
  } satisfies PropDef<'solid' | 'outline'>,
};

const stringPropDef = {
  width: {
    type: 'string',
    className: 'mui-width',
    customProperties: ['--width'],
  } satisfies PropDef<string>,
};

const booleanPropDef = {
  active: {
    type: 'boolean',
    className: 'mui-active',
  } satisfies PropDef<boolean>,
};

const responsiveBooleanPropDef = {
  active: {
    type: 'boolean',
    className: 'mui-active',
    default: true,
    responsive: true,
  } satisfies PropDef<boolean>,
};

describe('extractProps', () => {
  test('aplica o valor padrão quando a prop não é passada', () => {
    const result = extractProps({}, enumPropDef);

    expect(result.className).toBe('mui-variant-solid');
  });

  test('usa o valor passado quando é válido', () => {
    const result = extractProps({ variant: 'outline' }, enumPropDef);

    expect(result.className).toBe('mui-variant-outline');
  });

  test('cai pro valor padrão quando o valor passado não é uma opção válida do enum', () => {
    const result = extractProps({ variant: 'inexistente' }, enumPropDef);

    expect(result.className).toBe('mui-variant-solid');
  });

  test('remove a prop convertida em className do objeto de props retornado', () => {
    const result = extractProps({ variant: 'outline' }, enumPropDef);

    expect(result).not.toHaveProperty('variant');
  });

  test('preserva props que não têm prop-def correspondente', () => {
    const result = extractProps({ id: 'foo', variant: 'outline' }, enumPropDef);

    expect(result.id).toBe('foo');
  });

  test('string livre gera classe + custom property via prop-def de tipo string', () => {
    const result = extractProps({ width: '100px' }, stringPropDef);

    expect(result.className).toBe('mui-width');
  });

  test('boolean true aplica a className; boolean false/ausente não aplica', () => {
    expect(extractProps({ active: true }, booleanPropDef).className).toBe('mui-active');
    // clsx sempre retorna string ('' quando nada é aplicado), nunca undefined.
    expect(extractProps({ active: false }, booleanPropDef).className).toBe('');
    expect(extractProps({}, booleanPropDef).className).toBe('');
  });

  test('objeto responsivo (enum) gera classes prefixadas por breakpoint', () => {
    const result = extractProps({ variant: { initial: 'solid', md: 'outline' } }, responsiveEnumPropDef);

    expect(result.className).toBe('mui-variant-solid md:mui-variant-outline');
  });

  // Regressão do achado #7: boolean responsivo não preenchia o default no breakpoint "initial".
  test('[regressão #7] boolean responsivo preenche o default no breakpoint "initial" quando ausente', () => {
    const result = extractProps({ active: { md: false } }, responsiveBooleanPropDef);
    const classes = (result.className ?? '').split(' ');

    expect(classes).toContain('mui-active'); // default:true aplicado no initial
    expect(classes).not.toContain('md:mui-active'); // md:false não gera a classe prefixada
  });

  test('[regressão #7] "initial" explícito no boolean responsivo não é sobrescrito pelo default', () => {
    const result = extractProps({ active: { initial: false, md: true } }, responsiveBooleanPropDef);
    const classes = (result.className ?? '').split(' ');

    expect(classes).not.toContain('mui-active');
    expect(classes).toContain('md:mui-active');
  });

  // Regressão do achado #8: extractProps mutava o objeto responsivo original do consumidor.
  test('[regressão #8] não lança erro com um objeto responsivo Object.freeze()ado', () => {
    const frozenValue = Object.freeze({ md: 'outline' as const });

    expect(() => extractProps({ variant: frozenValue }, responsiveEnumPropDef)).not.toThrow();
  });

  test('[regressão #8] não muta o objeto responsivo original passado pelo consumidor', () => {
    const originalValue: { md: 'outline'; initial?: string } = { md: 'outline' };

    extractProps({ variant: originalValue }, responsiveEnumPropDef);

    expect(originalValue).toEqual({ md: 'outline' });
    expect('initial' in originalValue).toBe(false);
  });

  test('className e style passados diretamente são preservados/mesclados no resultado final', () => {
    const result = extractProps(
      { className: 'extra', style: { color: 'red' }, variant: 'outline' },
      enumPropDef,
    );

    expect(result.className).toBe('mui-variant-outline extra');
    expect(result.style).toEqual({ color: 'red' });
  });
});
