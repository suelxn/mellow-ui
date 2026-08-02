/* 
  Define os tokens de escala e os objetos de especificação para as propriedades de espaçamento interno (p, px, py, pt, pr, pb e pl). 
  Mapeia a escala numérica de 0 a 9 (paddingValues) para os seletores utilitários e variáveis CSS de padding, 
  configurando suporte a valores responsivos via PropDef e exportando o tipo unificado PaddingProps.
*/

import type { GetPropDefTypes, PropDef } from './prop-def.js';

const paddingValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

const paddingPropDefs = {
  /**
   * Define a propriedade CSS **padding**. 
  * Suporta valores de escala de espaçamento, strings CSS e objetos responsivos.
   *
   * @example
   * p="4"
   * p="100px"
   * p={{ sm: '6', lg: '9' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding
   */
  p: {
    type: 'enum | string',
    className: 'rt-r-p',
    customProperties: ['--p'],
    values: paddingValues,
    responsive: true,
  },
  /**
   * Define as propriedades CSS **padding-left** e **padding-right**. 
   * Oferece suporte a valores de escala de espaçamento, strings CSS e objetos responsivos.jects.
   *
   * @example
   * px="4"
   * px="100px"
   * px={{ sm: '6', lg: '9' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right
   */
  px: {
    type: 'enum | string',
    className: 'rt-r-px',
    customProperties: ['--pl', '--pr'],
    values: paddingValues,
    responsive: true,
  },
  /**
   * Define as propriedades CSS **padding-top** e **padding-bottom**. 
   * Suporta valores de escala de espaçamento, strings CSS e objetos responsivos.
   *
   * @example
   * py="4"
   * py="100px"
   * py={{ sm: '6', lg: '9' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
   */
  py: {
    type: 'enum | string',
    className: 'rt-r-py',
    customProperties: ['--pt', '--pb'],
    values: paddingValues,
    responsive: true,
  },
  /**
   * Define a propriedade CSS **padding-top**. 
   * Suporta valores de escala de espaçamento, strings CSS e objetos responsivos.
   *
   * @example
   * pt="4"
   * pt="100px"
   * pt={{ sm: '6', lg: '9' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top
   */
  pt: {
    type: 'enum | string',
    className: 'rt-r-pt',
    customProperties: ['--pt'],
    values: paddingValues,
    responsive: true,
  },
  /**
   * Define a propriedade CSS **padding-right**. 
   * Suporta valores de escala de espaçamento, strings CSS e objetos responsivos.
   *
   * @example
   * pr="4"
   * pr="100px"
   * pr={{ sm: '6', lg: '9' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right
   */
  pr: {
    type: 'enum | string',
    className: 'rt-r-pr',
    customProperties: ['--pr'],
    values: paddingValues,
    responsive: true,
  },
  /**
   * Define a propriedade CSS **padding-bottom**. 
   * Suporta valores de escala de espaçamento, strings CSS e objetos responsivos.
   *
   * @example
   * pb="4"
   * pb="100px"
   * pb={{ sm: '6', lg: '9' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
   */
  pb: {
    type: 'enum | string',
    className: 'rt-r-pb',
    customProperties: ['--pb'],
    values: paddingValues,
    responsive: true,
  },
  /**
   * Define a propriedade CSS **padding-left**. 
   * Oferece suporte a valores de escala de espaçamento, strings CSS e objetos responsivos.
   *
   * @example
   * pl="4"
   * pl="100px"
   * pl={{ sm: '6', lg: '9' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left
   */
  pl: {
    type: 'enum | string',
    className: 'rt-r-pl',
    customProperties: ['--pl'],
    values: paddingValues,
    responsive: true,
  },
} satisfies {
  p: PropDef<(typeof paddingValues)[number]>;
  px: PropDef<(typeof paddingValues)[number]>;
  py: PropDef<(typeof paddingValues)[number]>;
  pt: PropDef<(typeof paddingValues)[number]>;
  pr: PropDef<(typeof paddingValues)[number]>;
  pb: PropDef<(typeof paddingValues)[number]>;
  pl: PropDef<(typeof paddingValues)[number]>;
};

type PaddingProps = GetPropDefTypes<typeof paddingPropDefs>;

export { paddingPropDefs };
export type { PaddingProps };
