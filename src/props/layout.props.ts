/* 
  Agrupa e define as especificações de props para o controle de layout abrangente do Design System (layoutPropDefs). 
  Combina as definições de padding, width e height com propriedades de posicionamento, coordenadas de borda (inset, top, right, bottom, left), 
  comportamento de overflow, configurações de Flexbox/Grid e alinhamentos de item (alignSelf, justifySelf), 
  mapeando-as para classes utilitárias, variáveis CSS e exportando a tipagem composta LayoutProps.
*/

import { paddingPropDefs } from './padding.props';
import { heightPropDefs } from './height.props';
import { widthPropDefs } from './width.props';

import type { PropDef, GetPropDefTypes } from './prop-def';

const overflowValues = ['visible', 'hidden', 'clip', 'scroll', 'auto'] as const;
const positionValues = ['static', 'relative', 'absolute', 'fixed', 'sticky'] as const;
// prettier-ignore
const positionEdgeValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9'] as const;
const flexShrinkValues = ['0', '1'] as const;
const flexGrowValues = ['0', '1'] as const;
const alignSelfValues = ['start', 'center', 'end', 'baseline', 'stretch'] as const;
const justifySelfValues = ['start', 'center', 'end', 'baseline', 'stretch'] as const;

const layoutPropDefs = {
  ...paddingPropDefs,
  ...widthPropDefs,
  ...heightPropDefs,
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
    type: 'enum',
    className: 'mui-r-position',
    values: positionValues,
    responsive: true,
  },
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
    type: 'enum | string',
    className: 'mui-r-inset',
    customProperties: ['--inset'],
    values: positionEdgeValues,
    responsive: true,
  },
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
    type: 'enum | string',
    className: 'mui-r-top',
    customProperties: ['--top'],
    values: positionEdgeValues,
    responsive: true,
  },
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
    type: 'enum | string',
    className: 'mui-r-right',
    customProperties: ['--right'],
    values: positionEdgeValues,
    responsive: true,
  },
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
    type: 'enum | string',
    className: 'mui-r-bottom',
    customProperties: ['--bottom'],
    values: positionEdgeValues,
    responsive: true,
  },
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
    type: 'enum | string',
    className: 'mui-r-left',
    customProperties: ['--left'],
    values: positionEdgeValues,
    responsive: true,
  },
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
    type: 'enum',
    className: 'mui-r-overflow',
    values: overflowValues,
    responsive: true,
  },
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
    type: 'enum',
    className: 'mui-r-ox',
    values: overflowValues,
    responsive: true,
  },
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
    type: 'enum',
    className: 'mui-r-oy',
    values: overflowValues,
    responsive: true,
  },
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
    type: 'string',
    className: 'mui-r-fb',
    customProperties: ['--flex-basis'],
    responsive: true,
  },
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
    type: 'enum | string',
    className: 'mui-r-fs',
    customProperties: ['--flex-shrink'],
    values: flexShrinkValues,
    responsive: true,
  },
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
    type: 'enum | string',
    className: 'mui-r-fg',
    customProperties: ['--flex-grow'],
    values: flexGrowValues,
    responsive: true,
  },
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
    type: 'string',
    className: 'mui-r-ga',
    customProperties: ['--grid-area'],
    responsive: true,
  },
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
    type: 'string',
    className: 'mui-r-gc',
    customProperties: ['--grid-column'],
    responsive: true,
  },
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
    type: 'string',
    className: 'mui-r-gcs',
    customProperties: ['--grid-column-start'],
    responsive: true,
  },
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
    type: 'string',
    className: 'mui-r-gce',
    customProperties: ['--grid-column-end'],
    responsive: true,
  },
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
    type: 'string',
    className: 'mui-r-gr',
    customProperties: ['--grid-row'],
    responsive: true,
  },
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
    type: 'string',
    className: 'mui-r-grs',
    customProperties: ['--grid-row-start'],
    responsive: true,
  },
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
    type: 'string',
    className: 'mui-r-gre',
    customProperties: ['--grid-row-end'],
    responsive: true,
  },
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
    type: 'enum',
    className: 'mui-r-as',
    values: alignSelfValues,
    responsive: true,
  },
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
    type: 'enum',
    className: 'mui-r-js',
    values: justifySelfValues,
    responsive: true,
  },
} satisfies {
  position: PropDef<(typeof positionValues)[number]>;
  inset: PropDef<(typeof positionEdgeValues)[number]>;
  top: PropDef<(typeof positionEdgeValues)[number]>;
  right: PropDef<(typeof positionEdgeValues)[number]>;
  bottom: PropDef<(typeof positionEdgeValues)[number]>;
  left: PropDef<(typeof positionEdgeValues)[number]>;
  overflow: PropDef<(typeof overflowValues)[number]>;
  overflowX: PropDef<(typeof overflowValues)[number]>;
  overflowY: PropDef<(typeof overflowValues)[number]>;
  flexBasis: PropDef<string>;
  flexShrink: PropDef<(typeof flexShrinkValues)[number]>;
  flexGrow: PropDef<(typeof flexGrowValues)[number]>;
  gridColumn: PropDef<string>;
  gridColumnStart: PropDef<string>;
  gridColumnEnd: PropDef<string>;
  gridRow: PropDef<string>;
  gridRowStart: PropDef<string>;
  gridRowEnd: PropDef<string>;
  gridArea: PropDef<string>;
  alignSelf: PropDef<(typeof alignSelfValues)[number]>;
  justifySelf: PropDef<(typeof justifySelfValues)[number]>;
};

// Use todas as definições de props importadas para garantir que o JSDoc funcione
type LayoutProps = GetPropDefTypes<
  typeof paddingPropDefs & typeof widthPropDefs & typeof heightPropDefs & typeof layoutPropDefs
>;

export { layoutPropDefs };
export type { LayoutProps };
