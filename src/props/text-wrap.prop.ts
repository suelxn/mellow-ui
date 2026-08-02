/* 
  Define o objeto de especificação e tipagem para a propriedade de quebra de texto "wrap". 
  Mapeia os valores de empacotamento tipográfico (textWrapValues: wrap, nowrap, pretty e balance) 
  para a classe utilitária "rt-r-tw" com suporte a variações responsivas via PropDef.
*/

import type { PropDef } from './prop-def.js';

const textWrapValues = ['wrap', 'nowrap', 'pretty', 'balance'] as const;

const textWrapPropDef = {
  wrap: {
    type: 'enum',
    className: 'rt-r-tw',
    values: textWrapValues,
    responsive: true,
  },
} satisfies {
  wrap: PropDef<(typeof textWrapValues)[number]>;
};

export { textWrapPropDef };
