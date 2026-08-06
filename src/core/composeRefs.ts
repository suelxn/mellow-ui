/*
  Combina múltiplos refs (callback ou objeto) em um único ref callback, para que o Slot possa
  encaminhar o DOM node tanto para o ref recebido do componente pai quanto para o ref que o
  elemento filho já possuía antes da clonagem.
*/

import type { Ref, RefCallback } from 'react';

function setRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (typeof ref === 'function') {
    return ref(value);
  }
  if (ref) {
    (ref as { current: T | null }).current = value;
  }
}

function composeRefs<T>(...refs: (Ref<T> | undefined)[]): RefCallback<T> {
  return (node) => {
    const cleanups = refs.map((ref) => setRef(ref, node));

    return () => {
      cleanups.forEach((cleanup, index) => {
        if (typeof cleanup === 'function') {
          cleanup();
        } else {
          setRef(refs[index], null);
        }
      });
    };
  };
}

export { composeRefs };
