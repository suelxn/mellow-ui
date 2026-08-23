'use client';

/*
  Componente raiz do Design System. Só controla dark mode: aplica a classe "dark"/"light" no
  DOM, que troca os valores de --color-* definidos em src/styles/index.css (a paleta de cor
  em si é fixa, não é mais configurável por prop - ver ESTRUTURA.md).
*/

import * as React from 'react';

type ThemeProps = {
  /** @default 'inherit' */
  appearance?: 'inherit' | 'light' | 'dark';
  children: React.ReactNode;
};

function Theme({ appearance = 'inherit', children }: ThemeProps) {
  const appearanceClassName =
    appearance === 'light' ? 'light' : appearance === 'dark' ? 'dark' : undefined;

  return <div className={appearanceClassName}>{children}</div>;
}

export { Theme };
export type { ThemeProps };
