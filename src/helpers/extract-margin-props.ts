/*
  Separa as props de margem (m, mx, my, mt, mr, mb, ml) do restante das props de um
  componente, para que possam ser tratadas à parte (ex.: repassadas para um wrapper).
*/

import type { MarginProps } from '../props/margin.props.js';

export function extractMarginProps<T extends MarginProps>(props: T) {
  const { m, mx, my, mt, mr, mb, ml, ...rest } = props;
  return { m, mx, my, mt, mr, mb, ml, rest };
}
