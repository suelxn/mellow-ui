'use client';

/*
  Implementação interna da prop "asChild" (ver src/props/as-child.prop.ts). Não é exportado
  publicamente pela biblioteca, é usado pelos componentes internamente, ex.:

    const Comp = asChild ? Slot : 'button';
    return <Comp {...rest} ref={ref}>{children}</Comp>;

  O Slot exige exatamente um elemento React filho válido, mescla nele as props resolvidas pelo
  componente (className, style, handlers, ref, demais atributos, ver mergeProps) e devolve o
  filho clonado no lugar do próprio nó, em vez de renderizar um elemento HTML próprio.
*/

import * as React from 'react';

import { composeRefs } from './composeRefs';
import { mergeProps } from './mergeProps';

type SlotProps = {
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
} & Record<string, unknown>;

function Slot({ children, ref, ...slotProps }: SlotProps) {
  const child = React.Children.only(children);

  if (!React.isValidElement<{ ref?: React.Ref<HTMLElement> }>(child)) {
    throw new Error('[mellow-ui] "asChild" espera um elemento React único e válido como filho.');
  }

  const childRef = child.props.ref;
  const mergedProps = mergeProps(slotProps, child.props as Record<string, unknown>);

  return React.cloneElement(child, {
    ...mergedProps,
    ref: ref ? composeRefs(ref, childRef) : childRef,
  } as Partial<unknown> & React.Attributes);
}

export { Slot };
export type { SlotProps };
