/*
  Resolve o tom de cinza (`neutral` ou `slate`) correspondente a um `accentColor`, replicando
  em TS o mapeamento por temperatura definido em `[data-gray-color='auto']`
  (src/styles/tokens/color.css).
*/

import type { accentColors, grayColors } from '../props/color.prop.js';

type ThemeAccentColor = (typeof accentColors)[number];
type ThemeGrayColor = Exclude<(typeof grayColors)[number], 'auto'>;

// Espelha o mapeamento de temperatura de src/styles/tokens/color.css ([data-gray-color='auto']):
// accents frios recebem slate (viés azulado), accents quentes recebem neutral (acromático).
export function getMatchingGrayColor(accentColor: ThemeAccentColor): ThemeGrayColor {
  switch (accentColor) {
    case 'blue':
    case 'sky':
    case 'green':
    case 'mint':
      return 'slate';
    case 'coral':
    case 'pink':
    case 'red':
    case 'yellow':
      return 'neutral';
  }
}
