/* 
  Define os objetos de especificação e os tipos TypeScript para as propriedades de dimensão vertical (height, minHeight e maxHeight). 
  Associa cada propriedade às suas respectivas classes utilitárias e variáveis CSS dinâmicas, 
  configurando o comportamento responsivo via PropDef e exportando o tipo agrupado HeightProps.
*/

import type { PropDef, GetPropDefTypes } from './prop-def';

const heightPropDefs = {
  /**
   * Define a propriedade CSS **height**. 
   * Suporta strings CSS e objetos responsivos.
   *
   * @example
   * height="100px"
   * height={{ md: '100vh', xl: '600px' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/height
   */
  height: {
    type: 'string',
    className: 'mui-r-h',
    customProperties: ['--height'],
    responsive: true,
  },
  /**
   * Define a propriedade CSS **min-height**.
   * Suporta strings CSS e objetos responsivos.
   *
   * @example
   * minHeight="100px"
   * minHeight={{ md: '100vh', xl: '600px' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
   */
  minHeight: {
    type: 'string',
    className: 'mui-r-min-h',
    customProperties: ['--min-height'],
    responsive: true,
  },
  /**
   * Define a propriedade CSS **max-height**. 
   * Suporta strings CSS e objetos responsivos.
   *
   * @example
   * maxHeight="100px"
   * maxHeight={{ md: '100vh', xl: '600px' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
   */
  maxHeight: {
    type: 'string',
    className: 'mui-r-max-h',
    customProperties: ['--max-height'],
    responsive: true,
  },
} satisfies {
  height: PropDef<string>;
  minHeight: PropDef<string>;
  maxHeight: PropDef<string>;
};

type HeightProps = GetPropDefTypes<typeof heightPropDefs>;

export { heightPropDefs };
export type { HeightProps };
