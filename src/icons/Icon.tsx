/*
  Define o componente wrapper unificado para exibição de ícones do Design System.
  Não importa nada em runtime de "@phosphor-icons/react" (só tipos, ver types.ts) — recebe o
  componente do ícone já escolhido e importado pelo consumidor via prop "icon", e só
  padroniza propriedades de tamanho (via mapa ICON_SIZES ou valor numérico), peso e cor.
*/

import type { IconProps } from './types';
import { ICON_SIZES } from './types';

export function Icon({
  icon: IconComponent,
  size = 'md', // Define 'md' (24px) como padrão do Design System
  color = 'currentColor',
  weight = 'regular',
  ...props
}: IconProps) {
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
