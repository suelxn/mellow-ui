/* 
  Define os tokens de espessura de fonte e o objeto de especificação para a propriedade "weight". 
  Mapeia as opções de peso tipográfico (weights: light, regular, medium e bold) 
  para a classe utilitária "rt-r-weight" com suporte a ajustes responsivos via PropDef.
*/

import type { PropDef } from './prop-def.js';

const weights = ['light', 'regular', 'medium', 'bold'] as const;

const weightPropDef = {
  weight: {
    type: 'enum',
    className: 'rt-r-weight',
    values: weights,
    responsive: true,
  },
} satisfies {
  weight: PropDef<(typeof weights)[number]>;
};

export { weightPropDef };
