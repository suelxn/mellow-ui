/*
  Tipos utilitários para componentes polimórficos (prop `as`). Extraem e filtram as props
  nativas de um elemento/componente React e listam as props que a lib remove antes de
  repassá-las ao DOM.
*/

import type React from 'react';

type ComponentPropsAs<
  C extends React.ElementType,
  T extends React.ComponentPropsWithoutRef<C>['as'],
> = Omit<Extract<React.ComponentPropsWithoutRef<C>, { as: T }>, 'as' | 'asChild'>;

// Omite as propriedades especificadas das propriedades do componente. O recurso de autocompletar sugerirá propriedades
// do componente, mas não restringirá as propriedades omitidas àquelas que realmente existem.
type ComponentPropsWithout<
  T extends React.ElementType,
  O extends
    | Omit<string, keyof React.ComponentPropsWithoutRef<T>>
    | keyof React.ComponentPropsWithoutRef<T>,
> = Omit<React.ComponentPropsWithoutRef<T>, O & string>;

type RemovedProps = 'asChild' | 'defaultChecked' | 'defaultValue' | 'color';

export type { ComponentPropsAs, ComponentPropsWithout, RemovedProps };
