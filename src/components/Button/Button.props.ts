/*
  Define o objeto de especificação e tipagem para as props do componente de exemplo "Button".

  Este componente existe só para validar a pipeline de build/lint/teste e servir de
  referência de uso do sistema de props (asChild) e dos tokens de cor/tamanho. Quando a fase
  de construção dos componentes de verdade começar, este arquivo (e os demais Button.*) deve
  ser apagado e substituído pela implementação real do Button do Design System.
*/

import type { PropDef } from '../../props/prop-def';
import { asChildPropDef } from '../../props/as-child.prop';
import { accentColors } from '../../props/color.prop';

const buttonVariants = ['solid', 'soft', 'outline', 'ghost'] as const;
const buttonSizes = ['1', '2', '3'] as const;

const buttonPropDefs = {
  ...asChildPropDef,
  /**
   * Define o estilo visual do botão.
   */
  variant: {
    type: 'enum',
    values: buttonVariants,
    default: 'solid',
  },
  /**
   * Define o tamanho do botão.
   */
  size: {
    type: 'enum',
    values: buttonSizes,
    default: '2',
  },
  /**
   * Sobrescreve a cor de destaque herdada do Theme só para este botão.
   */
  color: {
    type: 'enum',
    values: accentColors,
    default: undefined as (typeof accentColors)[number] | undefined,
  },
} satisfies {
  asChild: PropDef<boolean>;
  variant: PropDef<(typeof buttonVariants)[number]>;
  size: PropDef<(typeof buttonSizes)[number]>;
  color: PropDef<(typeof accentColors)[number]>;
};

export { buttonPropDefs, buttonVariants, buttonSizes };
