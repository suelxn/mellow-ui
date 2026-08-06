/*
  Define o objeto de especificação e tipagem para a propriedade de quebra de texto "wrap".
  Mapeia os valores de empacotamento tipográfico (textWrapValues: wrap, nowrap, pretty e balance)
  para a classe utilitária "rt-r-tw" com suporte a variações responsivas via PropDef.
*/
const textWrapValues = ['wrap', 'nowrap', 'pretty', 'balance'];
const textWrapPropDef = {
    wrap: {
        type: 'enum',
        className: 'rt-r-tw',
        values: textWrapValues,
        responsive: true,
    },
};
export { textWrapPropDef };
