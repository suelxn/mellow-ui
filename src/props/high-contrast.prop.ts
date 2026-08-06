/* 
  Define o objeto de especificação e tipagem para a prop de acessibilidade "highContrast". 
  Associa a propriedade booleana à classe CSS utilitária "rt-high-contrast" para ativamento 
  de variantes visuais de alto contraste nos componentes, validada através do tipo PropDef.
*/

import type { PropDef } from './prop-def';

const highContrastPropDef = {
  highContrast: {
    type: 'boolean',
    className: 'rt-high-contrast',
    default: undefined,
  },
} satisfies {
  highContrast: PropDef<boolean>;
};

export { highContrastPropDef };
