'use client';

/*
  Componente raiz do Design System. Aplica a classe ".mellow-ui" e os atributos "data-*" (radius, scaling, accent-color, gray-color, panel-background, has-background e is-root-theme) dos quais os tokens em src/styles/tokens dependem para resolver suas CSS custom properties.

  Suporta aninhamento: um "Theme" dentro de outro herda, via Context, os valores do "Theme" pai e só sobrescreve o que for passado explicitamente por prop.
*/

import * as React from 'react';

import { themePropDefs } from './Theme.props';
import type { ThemeOwnProps } from './Theme.types';

type ThemeConfig = {
  accentColor: NonNullable<ThemeOwnProps['accentColor']>;
  grayColor: NonNullable<ThemeOwnProps['grayColor']>;
  panelBackground: NonNullable<ThemeOwnProps['panelBackground']>;
  radius: NonNullable<ThemeOwnProps['radius']>;
  scaling: NonNullable<ThemeOwnProps['scaling']>;
};

const defaultThemeConfig: ThemeConfig = {
  accentColor: themePropDefs.accentColor.default,
  grayColor: themePropDefs.grayColor.default,
  panelBackground: themePropDefs.panelBackground.default,
  radius: themePropDefs.radius.default,
  scaling: themePropDefs.scaling.default,
};

const ThemeContext = React.createContext<ThemeConfig | undefined>(undefined);

type ThemeProps = ThemeOwnProps;

function Theme(props: ThemeProps) {
  const {
    appearance = themePropDefs.appearance.default,
    accentColor,
    grayColor,
    panelBackground,
    radius,
    scaling,
    hasBackground,
    children,
  } = props;

  const parentConfig = React.useContext(ThemeContext);
  const isRootTheme = parentConfig === undefined;
  const inheritedConfig = parentConfig ?? defaultThemeConfig;

  const resolvedConfig: ThemeConfig = {
    accentColor: accentColor ?? inheritedConfig.accentColor,
    grayColor: grayColor ?? inheritedConfig.grayColor,
    panelBackground: panelBackground ?? inheritedConfig.panelBackground,
    radius: radius ?? inheritedConfig.radius,
    scaling: scaling ?? inheritedConfig.scaling,
  };

  // Um Theme aninhado não pinta fundo por padrão, apenas o Theme raiz da árvore.
  const resolvedHasBackground = hasBackground ?? isRootTheme;

  const appearanceClassName =
    appearance === 'light' ? 'light' : appearance === 'dark' ? 'dark' : undefined;

  return (
    <ThemeContext.Provider value={resolvedConfig}>
      <div
        className={['mellow-ui', appearanceClassName].filter(Boolean).join(' ')}
        data-radius={resolvedConfig.radius}
        data-scaling={resolvedConfig.scaling}
        data-accent-color={resolvedConfig.accentColor}
        data-gray-color={resolvedConfig.grayColor}
        data-panel-background={resolvedConfig.panelBackground}
        data-has-background={resolvedHasBackground}
        data-is-root-theme={isRootTheme}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export { Theme };
export type { ThemeProps };
