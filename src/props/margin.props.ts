/* 
  Define os tokens de escala e os objetos de especificação para as propriedades de margem externa (m, mx, my, mt, mr, mb e ml). 
  Mapeia a escala numérica de valores positivos e negativos (marginValues) para os seletores utilitários e variáveis CSS de margem, 
  configurando suporte a valores responsivos via PropDef e exportando o tipo unificado MarginProps.
*/

import type { PropDef, GetPropDefTypes } from './prop-def';

// prettier-ignore
const marginValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9'] as const;

const marginPropDefs = {
  /**
   * Define a propriedade CSS **margin**. 
   * Suporta valores de escala de espaçamento, strings CSS e objetos responsivos.
   *
   * @example
   * m="4"
   * m="100px"
   * m={{ sm: '6', lg: '9' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin
   */
  m: {
    type: 'enum | string',
    values: marginValues,
    responsive: true,
    className: 'mui-r-m',
    customProperties: ['--m'],
  },
  /**
   * Define as propriedades CSS **margin-left** e **margin-right**. 
   * Oferece suporte a valores de escala de espaçamento, strings CSS e objetos responsivos.
   *
   * @example
   * mx="4"
   * mx="100px"
   * mx={{ sm: '6', lg: '9' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right
   */
  mx: {
    type: 'enum | string',
    values: marginValues,
    responsive: true,
    className: 'mui-r-mx',
    customProperties: ['--ml', '--mr'],
  },
  /**
   * Define as propriedades CSS **margin-top** e **margin-bottom**. 
   * Oferece suporte a valores de escala de espaçamento, strings CSS e objetos responsivos.
   *
   * @example
   * my="4"
   * my="100px"
   * my={{ sm: '6', lg: '9' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom
   */
  my: {
    type: 'enum | string',
    values: marginValues,
    responsive: true,
    className: 'mui-r-my',
    customProperties: ['--mt', '--mb'],
  },
  /**
   * Define a propriedade CSS **margin-top**. 
   * Suporta valores de escala de espaçamento, strings CSS e objetos responsivos.
   *
   * @example
   * mt="4"
   * mt="100px"
   * mt={{ sm: '6', lg: '9' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top
   */
  mt: {
    type: 'enum | string',
    values: marginValues,
    responsive: true,
    className: 'mui-r-mt',
    customProperties: ['--mt'],
  },
  /**
   * Define a propriedade CSS **margin-right**. 
   * Suporta valores de escala de espaçamento, strings CSS e objetos responsivos.
   *
   * @example
   * mr="4"
   * mr="100px"
   * mr={{ sm: '6', lg: '9' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right
   */
  mr: {
    type: 'enum | string',
    values: marginValues,
    responsive: true,
    className: 'mui-r-mr',
    customProperties: ['--mr'],
  },
  /**
   * Define a propriedade CSS **margin-bottom**. 
   * Suporta valores de escala de espaçamento, strings CSS e objetos responsivos.
   *
   * @example
   * mb="4"
   * mb="100px"
   * mb={{ sm: '6', lg: '9' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom
   */
  mb: {
    type: 'enum | string',
    values: marginValues,
    responsive: true,
    className: 'mui-r-mb',
    customProperties: ['--mb'],
  },
  /**
   * Define a propriedade CSS **margin-left**. 
   * Suporta valores de escala de espaçamento, strings CSS e objetos responsivos.
   *
   * @example
   * ml="4"
   * ml="100px"
   * ml={{ sm: '6', lg: '9' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left
   */
  ml: {
    type: 'enum | string',
    values: marginValues,
    responsive: true,
    className: 'mui-r-ml',
    customProperties: ['--ml'],
  },
} satisfies {
  m: PropDef<(typeof marginValues)[number]>;
  mx: PropDef<(typeof marginValues)[number]>;
  my: PropDef<(typeof marginValues)[number]>;
  mt: PropDef<(typeof marginValues)[number]>;
  mr: PropDef<(typeof marginValues)[number]>;
  mb: PropDef<(typeof marginValues)[number]>;
  ml: PropDef<(typeof marginValues)[number]>;
};

type MarginProps = GetPropDefTypes<typeof marginPropDefs>;

export { marginPropDefs };
export type { MarginProps };
