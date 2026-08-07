/*
  Define os tokens de dimensão, tipos TypeScript e a interface de propriedades para o componente de Ícone.
  Mapeia a escala fixa de tamanhos (ICON_SIZES: xs a xl) e tipa as propriedades aceitas pelo
  componente (IconProps), garantindo consistência e suporte a sobrescritas numéricas.

  Importante: só tipos de "@phosphor-icons/react" são importados aqui (import type), nunca
  valores. O componente de ícone em si é recebido via prop (ver Icon.tsx) e escolhido pelo
  consumidor, que importa apenas os ícones que efetivamente usa — isso preserva tree-shaking
  e evita empacotar a biblioteca de ícones inteira no bundle de quem consome o Design System.
*/

import type { ComponentType } from 'react';
import type { IconProps as PhosphorIconProps, IconWeight } from '@phosphor-icons/react';

// Map de tokens
export const ICON_SIZES = {
  xs: 16,
  sm: 20,
  md: 24, // Tamanho padrão
  lg: 32,
  xl: 40,
} as const;

// O tipo pode ser tanto uma das chaves ('xs' | 'sm' | 'md' | 'lg' | 'xl') quanto um número direto
export type IconSize = keyof typeof ICON_SIZES | number;

export interface IconProps extends Omit<PhosphorIconProps, 'size' | 'weight'> {
  /**
   * Componente do ícone a ser renderizado, importado diretamente pelo consumidor a partir de
   * "@phosphor-icons/react" (ex.: `import { Heart } from '@phosphor-icons/react'`).
   * Passar o componente em vez de um nome em string preserva tree-shaking: só os ícones
   * realmente importados entram no bundle final.
   *
   * @example
   * import { Heart } from '@phosphor-icons/react';
   * <Icon icon={Heart} />
   */
  icon: ComponentType<PhosphorIconProps>;
  size?: IconSize;
  weight?: IconWeight;
}
