/*
  Define o objeto de especificação e tipagem para a prop de acessibilidade "highContrast".
  Associa a propriedade booleana à classe CSS utilitária "mui-high-contrast" para ativamento
  de variantes visuais de alto contraste nos componentes, validada através do tipo PropDef.
*/

import type { PropDef } from './prop-def.js';

// A classe "mui-high-contrast" não tem (e não deve ter) um seletor próprio em src/styles/ — no
// padrão Radix, ela é um modificador que cada componente combina com a SUA PRÓPRIA seleção pra
// escolher uma variante mais contrastante da cor em uso (ex.: ".Text.mui-high-contrast" resolve
// pra um tom de texto mais escuro/contrastante do que ".Text" sozinho; ".Badge.mui-high-contrast"
// faria o mesmo pro preenchimento do Badge). Sem nenhum componente real construído ainda, esse
// prop-def não tem consumidor — não apagar por "código morto"; fica pronto pra quando os
// componentes começarem a declarar suas próprias variantes de alto contraste.
const highContrastPropDef = {
  highContrast: {
    type: 'boolean',
    className: 'mui-high-contrast',
    default: undefined,
  },
} satisfies {
  highContrast: PropDef<boolean>;
};

export { highContrastPropDef };
