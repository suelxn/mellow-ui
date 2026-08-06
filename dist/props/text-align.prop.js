/*
  Define o objeto de especificação e tipagem para a propriedade de alinhamento de texto "align".
  Mapeia os valores de orientação horizontal (textAlignValues: left, center e right)
  para a classe utilitária "rt-r-ta" com suporte a ajustes responsivos via PropDef.
*/
const textAlignValues = ['left', 'center', 'right'];
const textAlignPropDef = {
    align: {
        type: 'enum',
        className: 'rt-r-ta',
        values: textAlignValues,
        responsive: true,
    },
};
export { textAlignPropDef };
