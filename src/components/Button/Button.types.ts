import type React from 'react';

import type { GetPropDefTypes } from '../../props/prop-def.js';
import type { buttonPropDefs } from './Button.props.js';

type ButtonOwnProps = GetPropDefTypes<typeof buttonPropDefs>;

type ButtonProps = ButtonOwnProps &
  Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
    ref?: React.Ref<HTMLButtonElement>;
  };

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

export type { ButtonOwnProps, ButtonProps, ButtonVariant, ButtonSize };
