/*
  Helper para o padrão `asChild`/`Slot`: quando a implementação de um componente tem elementos
  DOM aninhados, garante que os `children` informados pelo consumidor entrem na posição certa
  da árvore em vez de substituir tudo.
*/

import * as React from 'react';

/**
* Esta é uma função auxiliar usada quando um componente suporta `asChild`
* usando o componente `Slot`, mas sua implementação contém elementos DOM aninhados.
*
* Usá-la garante que, se um consumidor usar a propriedade `asChild`, os elementos estejam na
* ordem correta no DOM, adotando os `children` pretendidos pelo consumidor.
*/
export function getSubtree(
  options: { asChild: boolean | undefined; children: React.ReactNode },
  content: React.ReactNode | ((children: React.ReactNode) => React.ReactNode),
) {
  const { asChild, children } = options;
  if (!asChild) return typeof content === 'function' ? content(children) : content;

  const firstChild = React.Children.only(children) as React.ReactElement;
  return React.cloneElement(firstChild, {
    // @ts-expect-error firstChild.props é unknown pois cloneElement não conhece o tipo do elemento
    children: typeof content === 'function' ? content(firstChild.props.children) : content,
  });
}
