/*
  Mescla múltiplos objetos de estilo inline em um só, da mesma forma que `clsx` mescla classes
  CSS, descartando entradas vazias/undefined.
*/

import type * as React from 'react';

type InlineStyle =
  | React.CSSProperties
  | Record<string, string | number | null | undefined>
  | undefined;

// Mescla estilos CSS da mesma forma que `classNames` mescla classes CSS
export function mergeStyles(...styles: Array<InlineStyle>): InlineStyle {
  let result: InlineStyle = {};

  for (const style of styles) {
    if (style) {
      result = { ...result, ...style };
    }
  }

  return Object.keys(result).length ? result : undefined;
}
