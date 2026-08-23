/*
  Mescla as props que o componente resolve para o Slot (slotProps) com as props do elemento
  filho recebido via asChild (childProps). Regra: className concatena, style mescla (filho
  vence em conflito) e handlers "on*" são compostos, os demais valores do filho sobrescrevem
  os do slot, já que o filho é quem melhor sabe do que precisa. Uma prop presente no filho mas
  com valor `undefined` (ex.: `{ onClick: condicao ? handler : undefined }`) é tratada como
  "sem opinião" e cai de volta pro valor do slot, em vez de apagá-lo — comum em código que
  espalha props condicionalmente sem removê-las de fato do objeto.
*/

import { composeEventHandlers } from './composeEventHandlers.js';

type AnyProps = Record<string, unknown>;

function mergeProps(slotProps: AnyProps, childProps: AnyProps): AnyProps {
  const merged: AnyProps = { ...slotProps, ...childProps };

  for (const propName in childProps) {
    const slotValue = slotProps[propName];
    const childValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);

    if (isHandler) {
      if (typeof slotValue === 'function' && typeof childValue === 'function') {
        merged[propName] = composeEventHandlers(
          slotValue as (event: never) => void,
          childValue as (event: never) => void
        );
      } else if (childValue === undefined) {
        merged[propName] = slotValue;
      }
    } else if (propName === 'style') {
      merged[propName] = { ...(slotValue as object), ...(childValue as object) };
    } else if (propName === 'className') {
      merged[propName] = [slotValue, childValue].filter(Boolean).join(' ');
    } else if (childValue === undefined) {
      merged[propName] = slotValue;
    }
  }

  return merged;
}

export { mergeProps };
