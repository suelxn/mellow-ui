'use client';

/*
  Componente de EXEMPLO, criado só para validar a pipeline de build/lint/teste (ver
  Button.test.tsx e Button.stories.tsx) e servir de referência de uso do sistema de props
  (asChild) e dos tokens de cor/tamanho/radius do Design System.

  Não é, e não pretende ser, a implementação final do Button. Quando a fase de construção dos componentes começar, APAGAR esta pasta e substitua pelo Button de verdade.
*/

import * as React from 'react';

import { Slot } from '../../core';
import { buttonPropDefs } from './Button.props';
import type { ButtonProps } from './Button.types';

function Button({
  asChild,
  variant = buttonPropDefs.variant.default,
  size = buttonPropDefs.size.default,
  color,
  className,
  ref,
  ...props
}: ButtonProps) {
  const Comp: React.ElementType = asChild ? Slot : 'button';

  return (
    <Comp
      ref={ref}
      data-variant={variant}
      data-size={size}
      data-accent-color={color}
      className={['mui-Button', className].filter(Boolean).join(' ')}
      {...props}
    />
  );
}

export { Button };
