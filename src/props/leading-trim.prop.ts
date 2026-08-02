/* 
  Define o objeto de especificação e tipagem para a propriedade de alinhamento e corte tipográfico "trim". 
  Controla a remoção dos espaços em branco verticais excedentes na caixa de texto (leading-trim: normal, start, end e both), 
  mapeando a prop à classe utilitária "rt-r-lt" com suporte a variações responsivas via PropDef.
*/

import type { PropDef } from './prop-def.js';

const leadingTrimValues = ['normal', 'start', 'end', 'both'] as const;

const leadingTrimPropDef = {
  trim: {
    type: 'enum',
    className: 'rt-r-lt',
    values: leadingTrimValues,
    responsive: true,
  },
} satisfies {
  trim: PropDef<(typeof leadingTrimValues)[number]>;
};

export { leadingTrimPropDef };
