import type React from 'react';

import type { GetPropDefTypes } from '../../props/prop-def';
import type { buttonPropDefs } from './Button.props';

type ButtonOwnProps = GetPropDefTypes<typeof buttonPropDefs>;

type ButtonProps = ButtonOwnProps &
  Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
    ref?: React.Ref<HTMLButtonElement>;
  };

export type { ButtonOwnProps, ButtonProps };
