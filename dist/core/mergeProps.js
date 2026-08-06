/*
  Mescla as props que o componente resolve para o Slot (slotProps) com as props do elemento
  filho recebido via asChild (childProps). Regra: className concatena, style mescla (filho
  vence em conflito) e handlers "on*" são compostos — os demais valores do filho sobrescrevem
  os do slot, já que o filho é quem melhor sabe do que precisa.
*/
import { composeEventHandlers } from './composeEventHandlers';
function mergeProps(slotProps, childProps) {
    const merged = { ...slotProps, ...childProps };
    for (const propName in childProps) {
        const slotValue = slotProps[propName];
        const childValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (typeof slotValue === 'function' && typeof childValue === 'function') {
                merged[propName] = composeEventHandlers(slotValue, childValue);
            }
        }
        else if (propName === 'style') {
            merged[propName] = { ...slotValue, ...childValue };
        }
        else if (propName === 'className') {
            merged[propName] = [slotValue, childValue].filter(Boolean).join(' ');
        }
    }
    return merged;
}
export { mergeProps };
