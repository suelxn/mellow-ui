/*
  Define os objetos de especificação e os tipos TypeScript para as propriedades de dimensão vertical (height, minHeight e maxHeight).
  Associa cada propriedade às suas respectivas classes utilitárias e variáveis CSS dinâmicas,
  configurando o comportamento responsivo via PropDef e exportando o tipo agrupado HeightProps.
*/
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
        className: 'rt-r-h',
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
        className: 'rt-r-min-h',
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
        className: 'rt-r-max-h',
        customProperties: ['--max-height'],
        responsive: true,
    },
};
export { heightPropDefs };
