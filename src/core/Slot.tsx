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

import { composeRefs } from './composeRefs.js';
import { mergeProps } from './mergeProps.js';

type SlotProps = {
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
} & Record<string, unknown>;

function Slot({ children, ref, ...slotProps }: SlotProps) {
  // React.Children.only já valida "um único elemento React válido" e lança sua própria exceção
  // (genérica, em inglês) para qualquer outro caso — capturamos e relançamos com uma mensagem
  // específica da lib, mais clara sobre a causa (uso incorreto da prop "asChild").
  let child: React.ReactElement<{ ref?: React.Ref<HTMLElement> }>;
  try {
    child = React.Children.only(children) as React.ReactElement<{ ref?: React.Ref<HTMLElement> }>;
  } catch {
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
