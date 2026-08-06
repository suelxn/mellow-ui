/*
  Define os tokens de arredondamento de borda e o objeto de especificação para a propriedade "radius".
  Mapeia a tupla imutável de dimensões de raio de curvatura (radii: none, small, medium, large e full)
  e exporta a definição tipada radiusPropDef via PropDef para padronização do visual dos componentes.
*/
const radii = ['none', 'small', 'medium', 'large', 'full'];
const radiusPropDef = {
    radius: {
        type: 'enum',
        values: radii,
        default: undefined,
    },
};
export { radiusPropDef, radii };
