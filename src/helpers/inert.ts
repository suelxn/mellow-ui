/*
  Resolve o valor correto do atributo HTML `inert` de acordo com a versão do React em uso,
  já que o suporte nativo ao atributo mudou entre versões.
*/

import * as React from 'react';

// "inert" funciona de maneira diferente entre as versões do React
export const inert = (Number.parseFloat(React.version) >= 19 ||
  '') as React.HTMLAttributes<unknown>['inert'];
