/* 
  Define as constantes de cores, tokens de paleta e definições de props para controle de cor do Design System. 
  Mapeia as listas imutáveis de cores de destaque (accentColors) e tons neutros (grayColors), 
  além de exportar os objetos de especificação (colorPropDef e accentColorPropDef) tipados 
  via PropDef para alinhamento e consistência visual entre os componentes.
*/


import type { PropDef } from './prop-def.js';

// prettier-ignore
const accentColors = ['blue', 'coral', 'green', 'mint', 'pink', 'red', 'sky', 'yellow'] as const;

// 'auto' resolve o cinza a partir do accentColor ativo (ver color.css); os demais valores são fixos.
const grayColors = ['auto', 'neutral', 'slate'] as const;

// Cor arbitrária por instância: cada componente escolhe livremente entre os 8 accent colors,
// sem relação com o accentColor ambiente definido pelo <Theme>. Usado por componentes de
// preenchimento/contorno (ex.: Badge, Button, Avatar, Callout).
const colorPropDef = {
  color: {
    type: 'enum',
    values: accentColors,
    default: undefined as (typeof accentColors)[number] | undefined,
  },
} satisfies {
  color: PropDef<(typeof accentColors)[number]>;
};

// Reservado para os componentes tipográficos ainda não construídos (Text, Heading, Link, Strong,
// Em, Quote). Diferente de colorPropDef: aqui a cor deve herdar o accentColor ambiente do <Theme>
// por padrão, e interagir com a prop `highContrast` desses componentes (variante mais suave vs.
// mais contrastante da mesma cor).
//
// O shape é idêntico ao de colorPropDef de propósito: no Radix Themes (referência de arquitetura
// deste projeto), a diferença entre os dois vive em como cada componente consome o valor, não no
// tipo do prop-def em si. Sem nenhum componente tipográfico implementado ainda, este prop-def não
// tem consumidor - fica pronto para quando o primeiro for construído; não apagar por "código morto".
const accentColorPropDef = {
  color: {
    type: 'enum',
    values: accentColors,
    default: undefined as (typeof accentColors)[number] | undefined,
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
