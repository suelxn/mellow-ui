/* 
  Define os tokens de dimensão, tipos TypeScript e a interface de propriedades para o componente de Ícone. 
  Mapeia a escala fixa de tamanhos (ICON_SIZES: xs a xl), extrai dinamicamente as chaves válidas de ícones 
  do @phosphor-icons/react (IconName) e tipa as propriedades aceitas pelo componente (IconProps), 
  garantindo consistência e suporte a sobrescritas numéricas.
*/

import { ComponentProps } from 'react';
import * as PhosphorIcons from '@phosphor-icons/react';

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

export type IconName = keyof typeof PhosphorIcons;

export interface IconProps extends Omit<ComponentProps<typeof PhosphorIcons.IconBase>, 'size' | 'weight'> {
  name: IconName;
  size?: IconSize;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
}