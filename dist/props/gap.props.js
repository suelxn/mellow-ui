/*
  Define os tokens de escala e os objetos de especificação para as propriedades de espaçamento entre elementos (gap, gapX e gapY).
  Mapeia a escala numérica imutável de 0 a 9 (gapValues) para os seletores utilitários de gap, column-gap e row-gap,
  configurando o suporte a variáveis CSS dinâmicas e ajustes responsivos via PropDef.
*/
const gapValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const gapPropDefs = {
    /**
     * Define a propriedade CSS **gap**.
     * Suporta valores de escala de espaçamento, strings CSS e objetos responsivos.
     *
     * @example
     * gap="4"
     * gap="20px"
     * gap={{ sm: '2', lg: '3em' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/gap
     */
    gap: {
        type: 'enum | string',
        className: 'rt-r-gap',
        customProperties: ['--gap'],
        values: gapValues,
        responsive: true,
    },
    /**
     * Define a propriedade CSS **row-gap**.
     * Oferece suporte a valores de escala de espaçamento, strings CSS e objetos responsivos.
     *
     * @example
     * gapX="4"
     * gapX="20px"
     * gapX={{ sm: '2', lg: '3em' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap
     */
    gapX: {
        type: 'enum | string',
        className: 'rt-r-cg',
        customProperties: ['--column-gap'],
        values: gapValues,
        responsive: true,
    },
    /**
     * Define a propriedade CSS **column-gap**.
     * Oferece suporte a valores de escala de espaçamento, strings CSS e objetos responsivos.
     *
     * @example
     * gapY="4"
     * gapY="20px"
     * gapY={{ sm: '2', lg: '3em' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
     */
    gapY: {
        type: 'enum | string',
        className: 'rt-r-rg',
        customProperties: ['--row-gap'],
        values: gapValues,
        responsive: true,
    },
};
export { gapPropDefs };
