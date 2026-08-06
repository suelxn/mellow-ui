/* 
  Define as constantes de cores, tokens de paleta e definições de props para controle de cor do Design System. 
  Mapeia as listas imutáveis de cores de destaque (accentColors) e tons neutros (grayColors), 
  além de exportar os objetos de especificação (colorPropDef e accentColorPropDef) tipados 
  via PropDef para alinhamento e consistência visual entre os componentes.
*/


import type { PropDef } from './prop-def';

// prettier-ignore
const accentColors = ['blue', 'coral', 'green', 'mint', 'pink', 'red', 'sky', 'yellow'] as const;

// 'auto' resolve o cinza a partir do accentColor ativo (ver color.css); os demais valores são fixos.
const grayColors = ['auto', 'neutral', 'slate'] as const;

const colorPropDef = {
  color: {
    type: 'enum',
    values: accentColors,
    default: undefined as (typeof accentColors)[number] | undefined,
  },
} satisfies {
  color: PropDef<(typeof accentColors)[number]>;
};

// 1. Quando usado em componentes que compõem texto, define a cor do texto como a cor de destaque atual.
// 2. Define a cor de destaque para componentes de texto descendentes com `highContrast={true}`.
const accentColorPropDef = {
  color: {
    type: 'enum',
    values: accentColors,
    default: '' as (typeof accentColors)[number],
  },
} satisfies {
  color: PropDef<(typeof accentColors)[number]>;
};

export {
  accentColorPropDef,
  colorPropDef,
  //
  accentColors,
  grayColors,
};
