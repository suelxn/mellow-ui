/* 
  Define o objeto de especificação e tipagem para a propriedade booleana de truncamento "truncate". 
  Vincula a prop à classe utilitária "mui-truncate" para aplicação automática do corte de texto 
  em linha única com reticências, utilizando a validação de tipo PropDef.
*/

import type { PropDef } from './prop-def';

const truncatePropDef = {
  truncate: {
    type: 'boolean',
    className: 'mui-truncate',
  },
} satisfies {
  truncate: PropDef<boolean>;
};

export { truncatePropDef };
