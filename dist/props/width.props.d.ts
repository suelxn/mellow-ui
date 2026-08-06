import type { GetPropDefTypes } from './prop-def';
declare const widthPropDefs: {
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
        type: "string";
        className: string;
        customProperties: "--width"[];
        responsive: true;
    };
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
        type: "string";
        className: string;
        customProperties: "--min-width"[];
        responsive: true;
    };
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
        type: "string";
        className: string;
        customProperties: "--max-width"[];
        responsive: true;
    };
};
type WidthProps = GetPropDefTypes<typeof widthPropDefs>;
export { widthPropDefs };
export type { WidthProps };
//# sourceMappingURL=width.props.d.ts.map