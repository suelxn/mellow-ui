/* 
  Define os tokens de arredondamento de borda e o objeto de especificação para a propriedade "radius". 
  Mapeia a tupla imutável de dimensões de raio de curvatura (radii: none, small, medium, large e full) 
  e exporta a definição tipada radiusPropDef via PropDef para padronização do visual dos componentes.
*/

import type { PropDef } from './prop-def';

const radii = ['none', 'xs',  'small', 'medium', 'large', 'full'] as const;

const radiusPropDef = {
  radius: {
    type: 'enum',
    values: radii,
    default: undefined,
  },
} satisfies {
  radius: PropDef<(typeof radii)[number]>;
};

export { radiusPropDef, radii };
