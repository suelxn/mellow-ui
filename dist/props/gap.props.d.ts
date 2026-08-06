declare const gapPropDefs: {
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
        type: "enum | string";
        className: string;
        customProperties: "--gap"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        responsive: true;
    };
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
        type: "enum | string";
        className: string;
        customProperties: "--column-gap"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        responsive: true;
    };
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
        type: "enum | string";
        className: string;
        customProperties: "--row-gap"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        responsive: true;
    };
};
export { gapPropDefs };
//# sourceMappingURL=gap.props.d.ts.map