/*
  Define o objeto de especificação e tipagem para as props do componente raiz "Theme".
  Reúne os tokens de tema (aparência, cor de destaque, cor neutra, fundo do painel, radius e scaling)
  que precisam estar presentes no elemento raiz para que as CSS custom properties do Design System resolvam.
*/

import type { PropDef } from '../../props/prop-def';
import { accentColors, grayColors } from '../../props/color.prop';
import { radii } from '../../props/radius.prop';
import { scalings } from '../../props/scaling.prop';

type ThemeRadius = (typeof radii)[number];

const appearances = ['inherit', 'light', 'dark'] as const;
const panelBackgrounds = ['solid', 'translucent'] as const;

const themePropDefs = {
  appearance: {
    type: 'enum',
    values: appearances,
    default: 'inherit',
  },
  accentColor: {
    type: 'enum',
    values: accentColors,
    default: 'pink',
  },
  grayColor: {
    type: 'enum',
    values: grayColors,
    default: 'neutral',
  },
  panelBackground: {
    type: 'enum',
    values: panelBackgrounds,
    default: 'translucent',
  },
  radius: {
    type: 'enum',
    values: radii,
    default: 'medium',
  },
  scaling: {
    type: 'enum',
    values: scalings,
    default: '100%',
  },
  hasBackground: {
    type: 'boolean',
    default: true,
  },
} satisfies {
  appearance: PropDef<(typeof appearances)[number]>;
  accentColor: PropDef<(typeof accentColors)[number]>;
  grayColor: PropDef<(typeof grayColors)[number]>;
  panelBackground: PropDef<(typeof panelBackgrounds)[number]>;
  radius: PropDef<ThemeRadius>;
  scaling: PropDef<(typeof scalings)[number]>;
  hasBackground: PropDef<boolean>;
};

export { themePropDefs, appearances, panelBackgrounds };
export type { ThemeRadius };
