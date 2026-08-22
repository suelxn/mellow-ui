import type React from 'react';

import type { GetPropDefTypes } from '../../props/prop-def.js';
import type { themePropDefs } from './Theme.props.js';

type ThemeOwnProps = GetPropDefTypes<typeof themePropDefs> & {
  children?: React.ReactNode;
};

export type { ThemeOwnProps };
