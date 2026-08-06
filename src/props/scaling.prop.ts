/*
  Define os tokens de escala da interface e o objeto de especificação para a propriedade "scaling".
  Mapeia a tupla imutável de porcentagens de escala (scalings: 90%, 95%, 100%, 105% e 110%)
  e exporta a definição tipada scalingPropDef via PropDef para ajuste de densidade visual do Design System.
*/

import type { PropDef } from './prop-def';

const scalings = ['90%', '95%', '100%', '105%', '110%'] as const;

const scalingPropDef = {
  scaling: {
    type: 'enum',
    values: scalings,
    default: '100%',
  },
} satisfies {
  scaling: PropDef<(typeof scalings)[number]>;
};

export { scalingPropDef, scalings };
