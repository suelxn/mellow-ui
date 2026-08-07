import type React from 'react';

import type { GetPropDefTypes } from '../../props/prop-def';
import type { themePropDefs } from './Theme.props';

type ThemeOwnProps = GetPropDefTypes<typeof themePropDefs> & {
  children?: React.ReactNode;
};

export type { ThemeOwnProps };
