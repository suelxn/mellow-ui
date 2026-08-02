/* 
  Define os objetos de especificação e os tipos TypeScript para as propriedades de dimensão horizontal (width, minWidth e maxWidth). 
  Associa cada propriedade às suas respectivas classes utilitárias e variáveis CSS dinâmicas, 
  configurando o comportamento responsivo via PropDef e exportando o tipo agrupado WidthProps.
*/

import type { GetPropDefTypes, PropDef } from './prop-def.js';

const widthPropDefs = {
  /**
   * Define a propriedade CSS **width**. 
   * Suporta strings CSS e objetos responsivos.
   *
   * @example
   * width="100px"
   * width={{ md: '100vw', xl: '1400px' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/width
   */
  width: {
    type: 'string',
    className: 'rt-r-w',
    customProperties: ['--width'],
    responsive: true,
  },
  /**
   * Define a propriedade CSS **min-width**. 
   * Suporta strings CSS e objetos responsivos.
   *
   * @example
   * minWidth="100px"
   * minWidth={{ md: '100vw', xl: '1400px' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/min-width
   */
  minWidth: {
    type: 'string',
    className: 'rt-r-min-w',
    customProperties: ['--min-width'],
    responsive: true,
  },
  /**
   * Define a propriedade CSS **max-width**. 
   * Suporta strings CSS e objetos responsivos.
   *
   * @example
   * maxWidth="100px"
   * maxWidth={{ md: '100vw', xl: '1400px' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
   */
  maxWidth: {
    type: 'string',
    className: 'rt-r-max-w',
    customProperties: ['--max-width'],
    responsive: true,
  },
} satisfies {
  width: PropDef<string>;
  minWidth: PropDef<string>;
  maxWidth: PropDef<string>;
};

type WidthProps = GetPropDefTypes<typeof widthPropDefs>;

export { widthPropDefs };
export type { WidthProps };
