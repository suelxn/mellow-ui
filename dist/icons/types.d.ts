import { ComponentProps } from 'react';
import * as PhosphorIcons from '@phosphor-icons/react';
export declare const ICON_SIZES: {
    readonly xs: 16;
    readonly sm: 20;
    readonly md: 24;
    readonly lg: 32;
    readonly xl: 40;
};
export type IconSize = keyof typeof ICON_SIZES | number;
export type IconName = keyof typeof PhosphorIcons;
export interface IconProps extends Omit<ComponentProps<typeof PhosphorIcons.IconBase>, 'size' | 'weight'> {
    name: IconName;
    size?: IconSize;
    weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
}
//# sourceMappingURL=types.d.ts.map