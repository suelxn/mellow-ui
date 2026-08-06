import type { GetPropDefTypes } from './prop-def';
declare const paddingPropDefs: {
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
        type: "enum | string";
        className: string;
        customProperties: "--p"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        responsive: true;
    };
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
        type: "enum | string";
        className: string;
        customProperties: ("--pl" | "--pr")[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        responsive: true;
    };
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
        type: "enum | string";
        className: string;
        customProperties: ("--pt" | "--pb")[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        responsive: true;
    };
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
        type: "enum | string";
        className: string;
        customProperties: "--pt"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        responsive: true;
    };
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
        type: "enum | string";
        className: string;
        customProperties: "--pr"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        responsive: true;
    };
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
        type: "enum | string";
        className: string;
        customProperties: "--pb"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        responsive: true;
    };
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
        type: "enum | string";
        className: string;
        customProperties: "--pl"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        responsive: true;
    };
};
type PaddingProps = GetPropDefTypes<typeof paddingPropDefs>;
export { paddingPropDefs };
export type { PaddingProps };
//# sourceMappingURL=padding.props.d.ts.map