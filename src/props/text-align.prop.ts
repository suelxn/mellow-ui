/* 
  Define o objeto de especificação e tipagem para a propriedade de alinhamento de texto "align". 
  Mapeia os valores de orientação horizontal (textAlignValues: left, center e right) 
  para a classe utilitária "rt-r-ta" com suporte a ajustes responsivos via PropDef.
*/

import type { PropDef } from './prop-def';

const textAlignValues = ['left', 'center', 'right'] as const;

const textAlignPropDef = {
  align: {
    type: 'enum',
    className: 'rt-r-ta',
    values: textAlignValues,
    responsive: true,
  },
} satisfies {
  align: PropDef<(typeof textAlignValues)[number]>;
};

export { textAlignPropDef };
