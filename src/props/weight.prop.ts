/* 
  Define os tokens de espessura de fonte e o objeto de especificação para a propriedade "weight". 
  Mapeia as opções de peso tipográfico (weights: thin, extralight, light, regular, medium, semibold, bold, extrabold e black) 
  para a classe utilitária "mui-r-weight" com suporte a ajustes responsivos via PropDef.
*/

import type { PropDef } from './prop-def';

const weights = ['thin', 'extralight', 'light', 'regular', 'medium', 'semibold', 'bold', 'extrabold', 'black'] as const;

const weightPropDef = {
  weight: {
    type: 'enum',
    className: 'mui-r-weight',
    values: weights,
    responsive: true,
  },
} satisfies {
  weight: PropDef<(typeof weights)[number]>;
};

export { weightPropDef };
