/*
  Define os tokens de espessura de fonte e o objeto de especificação para a propriedade "weight".
  Mapeia as opções de peso tipográfico (weights: thin, extralight, light, regular, medium, semibold, bold, extrabold e black)
  para a classe utilitária "rt-r-weight" com suporte a ajustes responsivos via PropDef.
*/
const weights = ['thin', 'extralight', 'light', 'regular', 'medium', 'semibold', 'bold', 'extrabold', 'black'];
const weightPropDef = {
    weight: {
        type: 'enum',
        className: 'rt-r-weight',
        values: weights,
        responsive: true,
    },
};
export { weightPropDef };
