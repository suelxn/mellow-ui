/*
  Define o objeto de especificação e tipagem para a propriedade booleana de truncamento "truncate".
  Vincula a prop à classe utilitária "rt-truncate" para aplicação automática do corte de texto
  em linha única com reticências, utilizando a validação de tipo PropDef.
*/
const truncatePropDef = {
    truncate: {
        type: 'boolean',
        className: 'rt-truncate',
    },
};
export { truncatePropDef };
