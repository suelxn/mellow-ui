/*
  Type guard que identifica se o valor de uma prop é um objeto responsivo (por breakpoint) em
  vez de um valor único, usado por `extractProps` e `getResponsiveStyles`.
*/

import { breakpoints } from '../props/prop-def.js';

import type { Responsive, Breakpoint } from '../props/prop-def.js';

export function isResponsiveObject<Value extends string>(
  obj: Responsive<Value | Omit<string, Value>> | undefined,
): obj is Record<Breakpoint, string> {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    Object.keys(obj).some((key) => {
      return breakpoints.has(key as Breakpoint);
    })
  );
}
