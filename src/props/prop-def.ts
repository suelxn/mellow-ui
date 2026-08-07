/* 
  Define os tipos fundamentais, utilitários de inferência e a estrutura de especificação de props do Design System (prop-def). 
  Estabelece o sistema de breakpoints responsivos (Responsive), o utilitário de autocomplete para union de tipos (Union), 
  as variantes de definição de propriedades (PropDef) e os tipos utilitários GetPropDefType e GetPropDefTypes 
  para inferência e extração automática de propriedades responsivas nos componentes.
*/

import type React from 'react';

// Cria um tipo de união de literais de string com strings, mas mantém o IntelliSense para os literais.
// Union<string, 'foo' | 'bar'> => string | Omit<string, 'foo' | 'bar'>
type Union<S = string, T extends string | number = string> = T | Omit<S, T>;

const breakpointsArray = ['initial', 'xs', 'sm', 'md', 'lg', 'xl'] as const;
const breakpoints = new Set(breakpointsArray);
type Breakpoint = typeof breakpoints extends Set<infer B> ? B : never;
type Responsive<T> = T | Partial<Record<Breakpoint, T>>;

type BooleanPropDef = {
  type: 'boolean';
  default?: boolean;
  required?: boolean;
  className?: string;
};
type StringPropDef = {
  type: 'string';
  default?: string;
  required?: boolean;
};
type ReactNodePropDef = {
  type: 'ReactNode';
  default?: React.ReactNode;
  required?: boolean;
};
type EnumPropDef<T> = {
  type: 'enum';
  values: readonly T[];
  default?: T;
  required?: boolean;
};
type EnumOrStringPropDef<T> = {
  type: 'enum | string';
  values: readonly T[];
  default?: T | string;
  required?: boolean;
};

type NonStylingPropDef = {
  className?: never;
  customProperties?: never;
  parseValue?: never;
};

type StylingPropDef = {
  className: string;
  parseValue?: (value: string) => string | undefined;
};

type ArbitraryStylingPropDef = {
  className: string;
  customProperties: `--${string}`[];
  parseValue?: (value: string) => string | undefined;
};

type RegularPropDef<T> =
  | ReactNodePropDef
  | BooleanPropDef
  | (StringPropDef & ArbitraryStylingPropDef)
  | (StringPropDef & NonStylingPropDef)
  | (EnumPropDef<T> & StylingPropDef)
  | (EnumPropDef<T> & NonStylingPropDef)
  | (EnumOrStringPropDef<T> & ArbitraryStylingPropDef)
  | (EnumOrStringPropDef<T> & NonStylingPropDef);
type ResponsivePropDef<T = unknown> = RegularPropDef<T> & { responsive: true };
type PropDef<T = unknown> = RegularPropDef<T> | ResponsivePropDef<T>;

// prettier-ignore
type GetPropDefType<Def> =
    Def extends BooleanPropDef ? (Def extends ResponsivePropDef ? Responsive<boolean> : boolean)
  : Def extends StringPropDef ? (Def extends ResponsivePropDef ? Responsive<string> : string)
  : Def extends ReactNodePropDef ? (Def extends ResponsivePropDef ? Responsive<React.ReactNode> : React.ReactNode)
  : Def extends EnumOrStringPropDef<infer Type> ?
    Def extends ResponsivePropDef<infer Type extends string> ? Responsive<Union<string, Type>> : Type
  : Def extends EnumPropDef<infer Type> ? (Def extends ResponsivePropDef<infer Type> ? Responsive<Type> : Type)
  : never;

type GetPropDefTypes<P> = {
  [K in keyof P]?: GetPropDefType<P[K]>;
};

export { breakpointsArray, breakpoints };
export type {
  PropDef,
  GetPropDefTypes,
  ResponsivePropDef,
  //
  Breakpoint,
  Responsive,
  Union,
};
