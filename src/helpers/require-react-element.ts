/*
  Valida que um `children` é um único elemento React válido, lançando um erro descritivo caso
  contrário. Usado por componentes que precisam clonar/inspecionar o filho recebido.
*/

import * as React from 'react';

/** Uma função que lança um erro quando um valor não é um elemento React válido; caso contrário, retorna o valor. */
export const requireReactElement = <T extends React.ReactNode>(children: T): T => {
  const isReactElement = React.isValidElement(children);

  if (!isReactElement) {
    throw Error(
      `Expected a single React Element child, but got: ${React.Children.toArray(children)
        .map((child) =>
          typeof child === 'object' && 'type' in child && typeof child.type === 'string'
            ? child.type
            : typeof child,
        )
        .join(', ')}`,
    );
  }

  return children;
};
