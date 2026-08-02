/* 
  Define o componente wrapper unificado para exibição de ícones do Design System. 
  Consome dinamicamente a biblioteca @phosphor-icons/react a partir da prop "name", 
  padroniza propriedades de tamanho (via mapa ICON_SIZES ou valor numérico), peso e cor, 
  e inclui tratamento de fallback com aviso de alerta no console caso o ícone não seja encontrado.
*/

import * as PhosphorIcons from '@phosphor-icons/react';
import { IconProps, ICON_SIZES } from './types';

export function Icon({
  name,
  size = 'md', // Define 'md' (24px) como padrão do Design System
  color = 'currentColor',
  weight = 'regular',
  ...props
}: IconProps) {
  const IconComponent = PhosphorIcons[name] as PhosphorIcons.Icon;

  if (!IconComponent) {
    console.warn(`[Design System]: O ícone "${name}" não foi encontrado na biblioteca.`);
    return null;
  }

  // Se o tamanho for uma string ('sm', 'md', etc.), busca no mapa. Se for número, usa direto.
  const computedSize = typeof size === 'string' ? ICON_SIZES[size] ?? 24 : size;

  return (
    <IconComponent
      size={computedSize}
      color={color}
      weight={weight}
      {...props}
    />
  );
}