import type { GetPropDefTypes } from './prop-def';
declare const marginPropDefs: {
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
        type: "enum | string";
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
        responsive: true;
        className: string;
        customProperties: "--m"[];
    };
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
        type: "enum | string";
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
        responsive: true;
        className: string;
        customProperties: ("--ml" | "--mr")[];
    };
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
        type: "enum | string";
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
        responsive: true;
        className: string;
        customProperties: ("--mt" | "--mb")[];
    };
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
        type: "enum | string";
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
        responsive: true;
        className: string;
        customProperties: "--mt"[];
    };
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
        type: "enum | string";
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
        responsive: true;
        className: string;
        customProperties: "--mr"[];
    };
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
        type: "enum | string";
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
        responsive: true;
        className: string;
        customProperties: "--mb"[];
    };
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
        type: "enum | string";
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
        responsive: true;
        className: string;
        customProperties: "--ml"[];
    };
};
type MarginProps = GetPropDefTypes<typeof marginPropDefs>;
export { marginPropDefs };
export type { MarginProps };
//# sourceMappingURL=margin.props.d.ts.map