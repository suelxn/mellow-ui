import type { GetPropDefTypes } from './prop-def';
declare const heightPropDefs: {
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
        type: "string";
        className: string;
        customProperties: "--height"[];
        responsive: true;
    };
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
        type: "string";
        className: string;
        customProperties: "--min-height"[];
        responsive: true;
    };
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
        type: "string";
        className: string;
        customProperties: "--max-height"[];
        responsive: true;
    };
};
type HeightProps = GetPropDefTypes<typeof heightPropDefs>;
export { heightPropDefs };
export type { HeightProps };
//# sourceMappingURL=height.props.d.ts.map