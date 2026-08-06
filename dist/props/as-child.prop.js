/*
  Define o objeto de especificação e tipagem para a prop polimórfica "asChild".
  Permite que o componente repasse seus comportamentos e estilos para o elemento filho direto em vez de
  renderizar um nó HTML próprio no DOM, utilizando a tipagem genérica PropDef e validação via o operador "satisfies".
*/
const asChildPropDef = {
    /**
     * Incorpora o componente ao seu filho imediato em vez de renderizar seu próprio elemento HTML.
     * Você precisará fornecer um único elemento filho React.
     */
    asChild: {
        type: 'boolean',
    },
};
export { asChildPropDef };
