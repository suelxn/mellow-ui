import { paddingPropDefs } from './padding.props';
import { heightPropDefs } from './height.props';
import { widthPropDefs } from './width.props';
import type { GetPropDefTypes } from './prop-def';
declare const layoutPropDefs: {
    /**
     * Define a propriedade CSS **position**.
     * Suporta os valores CSS correspondentes e objetos responsivos.
     *
     * @example
     * position="absolute"
     * position={{ sm: 'absolute', lg: 'sticky' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    position: {
        type: "enum";
        className: string;
        values: readonly ["static", "relative", "absolute", "fixed", "sticky"];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **inset**.
     * Suporta valores de escala de espaçamento, strings CSS e objetos responsivos.
     *
     * @example
     * inset="4"
     * inset="100px"
     * inset={{ sm: '0', lg: '50%' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/inset
     */
    inset: {
        type: "enum | string";
        className: string;
        customProperties: "--inset"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **top**.
     * Suporta valores de escala de espaçamento, strings CSS e objetos responsivos.
     *
     * @example
     * top="4"
     * top="100px"
     * top={{ sm: '0', lg: '50%' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/top
     */
    top: {
        type: "enum | string";
        className: string;
        customProperties: "--top"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **right**.
     * Suporta valores de escala de espaçamento, strings CSS e objetos responsivos.
     *
     * @example
     * right="4"
     * right="100px"
     * right={{ sm: '0', lg: '50%' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/right
     */
    right: {
        type: "enum | string";
        className: string;
        customProperties: "--right"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **bottom**.
     * Suporta valores de escala de espaçamento, strings CSS e objetos responsivos.
     *
     * @example
     * bottom="4"
     * bottom="100px"
     * bottom={{ sm: '0', lg: '50%' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/bottom
     */
    bottom: {
        type: "enum | string";
        className: string;
        customProperties: "--bottom"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **left**.
     * Suporta valores de escala de espaçamento, strings CSS e objetos responsivos.
     *
     * @example
     * left="4"
     * left="100px"
     * left={{ sm: '0', lg: '50%' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/left
     */
    left: {
        type: "enum | string";
        className: string;
        customProperties: "--left"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **overflow**.
     * Suporta os valores CSS correspondentes e objetos responsivos.
     *
     * @example
     * overflow="hidden"
     * overflow={{ sm: 'hidden', lg: 'visible' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
     */
    overflow: {
        type: "enum";
        className: string;
        values: readonly ["visible", "hidden", "clip", "scroll", "auto"];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **overflow-x**.
     * Suporta os valores CSS correspondentes e objetos responsivos.
     *
     * @example
     * overflowX="hidden"
     * overflowX={{ sm: 'hidden', md: 'visible' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
     */
    overflowX: {
        type: "enum";
        className: string;
        values: readonly ["visible", "hidden", "clip", "scroll", "auto"];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **overflow-x**.
     * Suporta os valores CSS correspondentes e objetos responsivos.
     *
     * @example
     * overflowY="hidden"
     * overflowY={{ sm: 'hidden', md: 'visible' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
     */
    overflowY: {
        type: "enum";
        className: string;
        values: readonly ["visible", "hidden", "clip", "scroll", "auto"];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **flex-basis**.
     * Suporta strings CSS e objetos responsivos.
     *
     * @example
     * flexBasis="0"
     * flexBasis="100%"
     * flexBasis={{ sm: '200px', lg: 'auto' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
     */
    flexBasis: {
        type: "string";
        className: string;
        customProperties: "--flex-basis"[];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **flex-shrink**.
     * Suporta strings CSS e objetos responsivos.
     *
     * @example
     * flexShrink="0"
     * flexShrink="1"
     * flexShrink={{ sm: '0', lg: '1' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
     */
    flexShrink: {
        type: "enum | string";
        className: string;
        customProperties: "--flex-shrink"[];
        values: readonly ["0", "1"];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **flex-grow**.
     * Suporta strings CSS e objetos responsivos.
     *
     * @example
     * flexGrow="0"
     * flexGrow="1"
     * flexGrow={{ sm: '0', lg: '1' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
     */
    flexGrow: {
        type: "enum | string";
        className: string;
        customProperties: "--flex-grow"[];
        values: readonly ["0", "1"];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **grid-area**.
     * Suporta strings CSS e objetos responsivos.
     *
     * @example
     * gridArea="header"
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area
     */
    gridArea: {
        type: "string";
        className: string;
        customProperties: "--grid-area"[];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **grid-column**.
     * Suporta strings CSS e objetos responsivos.
     *
     * @example
     * gridColumn="1"
     * gridColumn="1 / -1"
     * gridColumn={{ sm: '1 / 3', lg: 'span 3' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
     */
    gridColumn: {
        type: "string";
        className: string;
        customProperties: "--grid-column"[];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **grid-column-start**.
     * Suporta strings CSS e objetos responsivos.
     *
     * @example
     * gridColumnStart="1"
     * gridColumnStart="auto"
     * gridColumnStart={{ sm: '2', lg: 'span 3' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start
     */
    gridColumnStart: {
        type: "string";
        className: string;
        customProperties: "--grid-column-start"[];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **grid-column-end**.
     * Suporta strings CSS e objetos responsivos.
     *
     * @example
     * gridColumnEnd="1"
     * gridColumnEnd="auto"
     * gridColumnEnd={{ sm: '2', lg: 'span 3' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end
     */
    gridColumnEnd: {
        type: "string";
        className: string;
        customProperties: "--grid-column-end"[];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **grid-row**.
     * Suporta strings CSS e objetos responsivos.
     *
     * @example
     * gridRow="1"
     * gridRow="auto"
     * gridRow={{ sm: '2', lg: 'span 3' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
     */
    gridRow: {
        type: "string";
        className: string;
        customProperties: "--grid-row"[];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **grid-row-start**.
     * Suporta strings CSS e objetos responsivos.
     *
     * @example
     * gridRowStart="1"
     * gridRowStart="auto"
     * gridRowStart={{ sm: '2', lg: 'span 3' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start
     */
    gridRowStart: {
        type: "string";
        className: string;
        customProperties: "--grid-row-start"[];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **grid-row-end**.
     * Suporta strings CSS e objetos responsivos.
     *
     * @example
     * gridRowEnd="1"
     * gridRowEnd="auto"
     * gridRowEnd={{ sm: '2', lg: 'span 3' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end
     */
    gridRowEnd: {
        type: "string";
        className: string;
        customProperties: "--grid-row-end"[];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **align-self**.
     * Oferece suporte a um subconjunto dos valores CSS correspondentes e a objetos responsivos.
     *
     * @example
     * alignSelf="center"
     * alignSelf={{ sm: 'start', lg: 'center' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
     */
    alignSelf: {
        type: "enum";
        className: string;
        values: readonly ["start", "center", "end", "baseline", "stretch"];
        responsive: true;
    };
    /**
     * Define a propriedade CSS **justify-self**.
     * Oferece suporte a um subconjunto dos valores CSS correspondentes e a objetos responsivos.
     *
     * @example
     * justifySelf="center"
     * justifySelf={{ sm: 'start', lg: 'center' }}
     *
     * @link
     * https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self
     */
    justifySelf: {
        type: "enum";
        className: string;
        values: readonly ["start", "center", "end", "baseline", "stretch"];
        responsive: true;
    };
    height: {
        type: "string";
        className: string;
        customProperties: "--height"[];
        responsive: true;
    };
    minHeight: {
        type: "string";
        className: string;
        customProperties: "--min-height"[];
        responsive: true;
    };
    maxHeight: {
        type: "string";
        className: string;
        customProperties: "--max-height"[];
        responsive: true;
    };
    width: {
        type: "string";
        className: string;
        customProperties: "--width"[];
        responsive: true;
    };
    minWidth: {
        type: "string";
        className: string;
        customProperties: "--min-width"[];
        responsive: true;
    };
    maxWidth: {
        type: "string";
        className: string;
        customProperties: "--max-width"[];
        responsive: true;
    };
    p: {
        type: "enum | string";
        className: string;
        customProperties: "--p"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        responsive: true;
    };
    px: {
        type: "enum | string";
        className: string;
        customProperties: ("--pl" | "--pr")[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        responsive: true;
    };
    py: {
        type: "enum | string";
        className: string;
        customProperties: ("--pt" | "--pb")[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        responsive: true;
    };
    pt: {
        type: "enum | string";
        className: string;
        customProperties: "--pt"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        responsive: true;
    };
    pr: {
        type: "enum | string";
        className: string;
        customProperties: "--pr"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        responsive: true;
    };
    pb: {
        type: "enum | string";
        className: string;
        customProperties: "--pb"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        responsive: true;
    };
    pl: {
        type: "enum | string";
        className: string;
        customProperties: "--pl"[];
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        responsive: true;
    };
};
type LayoutProps = GetPropDefTypes<typeof paddingPropDefs & typeof widthPropDefs & typeof heightPropDefs & typeof layoutPropDefs>;
export { layoutPropDefs };
export type { LayoutProps };
//# sourceMappingURL=layout.props.d.ts.map