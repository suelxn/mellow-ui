/*
  Utilitário genérico para mapear o valor de uma prop responsiva (`Responsive<T>`) através de
  uma função, preservando a estrutura por breakpoint quando o valor não for uma string simples.
*/

import type { Responsive } from '../props/prop-def.js';

function mapResponsiveProp<Input extends string, Output>(
  propValue: Responsive<Input> | undefined,
  mapValue: (value: Input) => Output,
): Responsive<Output> | undefined {
  if (propValue === undefined) return undefined;
  if (typeof propValue === 'string') {
    return mapValue(propValue);
  }
  return Object.fromEntries(
    Object.entries(propValue).map(([key, value]) => [key, mapValue(value)]),
  );
}

export { mapResponsiveProp };
