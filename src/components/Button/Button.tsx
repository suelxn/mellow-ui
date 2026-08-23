'use client';

/*
  Componente Button do Design System, em Tailwind puro: as classes ficam direto no
  className, sem depender de tokens/props próprios (ver ESTRUTURA.md). A cor é dinâmica via
  prop, então as combinações variante×cor precisam existir como strings literais completas
  em colorClasses, o Tailwind só gera CSS pras classes que consegue ler como texto puro no
  código-fonte, não dá pra montar "bg-${color}-500" em runtime.
*/

import * as React from 'react';
import type { ComponentProps } from 'react';
import type { Icon as PhosphorIcon } from '@phosphor-icons/react';
import { clsx } from 'clsx';

import { Slot } from '../../core/index.js';

const buttonVariants = ['solid', 'outline', 'danger', 'ghost', 'text'] as const;
const buttonSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
const accentColors = [
  'absolute', 'blue', 'coral', 'green', 'mint', 'neutral', 'pink', 'red', 'sky', 'slate', 'yellow',
] as const;

type ButtonVariant = (typeof buttonVariants)[number];
type ButtonSize = (typeof buttonSizes)[number];
type ButtonColor = (typeof accentColors)[number];

interface ButtonProps extends ComponentProps<'button'> {
  /**
   * Funde as props do Button no elemento filho em vez de renderizar um `<button>` próprio
   * (útil pra um botão que na verdade é um link, por exemplo). Exige exatamente um elemento
   * React como `children`.
   *
   * @default false
   */
  asChild?: boolean;
  /**
   * Estilo visual do botão. `danger` ignora a prop `color` de propósito — um botão
   * destrutivo é sempre vermelho.
   *
   * @default 'solid'
   */
  variant?: ButtonVariant;
  /**
   * Cor de marca usada pelas variantes `solid`, `outline`, `ghost` e `text` (não se aplica a
   * `danger`).
   *
   * @default 'pink'
   */
  color?: ButtonColor;
  /**
   * Tamanho do botão.
   *
   * @default 'md'
   */
  size?: ButtonSize;
  /**
   * Mostra um spinner no lugar do `IconLeft` e desabilita o botão enquanto for `true`.
   *
   * @default false
   */
  loading?: boolean;
  /**
   * Ícone (Phosphor) exibido antes do conteúdo. Ignorado quando `asChild` é usado, e
   * substituído pelo spinner enquanto `loading` for `true`.
   */
  IconLeft?: PhosphorIcon;
  /** Ícone (Phosphor) exibido depois do conteúdo. Ignorado quando `asChild` é usado. */
  IconRight?: PhosphorIcon;
}

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'h-6 px-2 text-xs gap-1',
  sm: 'h-8 px-3 text-sm gap-1.5',
  md: 'h-10 px-4 text-base gap-2',
  lg: 'h-12 px-5 text-lg gap-2.5',
  xl: 'h-14 px-6 text-xl gap-3',
};

type AccentClasses = { solid: string; outline: string; ghost: string; text: string };

// Contraste claro/escuro calibrado por família a partir do tom -500 de cada cor.
const colorClasses: Record<ButtonColor, AccentClasses> = {
  absolute: {
    solid:
      'bg-black text-white hover:bg-neutral-800 active:bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:active:bg-neutral-300',
    outline: 'border border-neutral-900 text-neutral-900 hover:bg-neutral-100 dark:border-white dark:text-white dark:hover:bg-neutral-800',
    ghost: 'text-neutral-900 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800',
    text: 'text-neutral-900 hover:underline dark:text-white',
  },
  blue: {
    solid: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
    outline: 'border border-blue-500 text-blue-600 hover:bg-blue-50',
    ghost: 'text-blue-600 hover:bg-blue-50',
    text: 'text-blue-600 hover:underline',
  },
  coral: {
    solid: 'bg-coral-500 text-neutral-900 hover:bg-coral-600 active:bg-coral-700',
    outline: 'border border-coral-500 text-coral-600 hover:bg-coral-50',
    ghost: 'text-coral-600 hover:bg-coral-50',
    text: 'text-coral-600 hover:underline',
  },
  green: {
    solid: 'bg-green-500 text-neutral-900 hover:bg-green-600 active:bg-green-700',
    outline: 'border border-green-500 text-green-600 hover:bg-green-50',
    ghost: 'text-green-600 hover:bg-green-50',
    text: 'text-green-600 hover:underline',
  },
  mint: {
    solid: 'bg-mint-500 text-neutral-900 hover:bg-mint-600 active:bg-mint-700',
    outline: 'border border-mint-500 text-mint-600 hover:bg-mint-50',
    ghost: 'text-mint-600 hover:bg-mint-50',
    text: 'text-mint-600 hover:underline',
  },
  neutral: {
    solid: 'bg-neutral-500 text-white hover:bg-neutral-600 active:bg-neutral-700',
    outline: 'border border-neutral-500 text-neutral-600 hover:bg-neutral-50',
    ghost: 'text-neutral-600 hover:bg-neutral-50',
    text: 'text-neutral-600 hover:underline',
  },
  pink: {
    solid: 'bg-pink-500 text-neutral-900 hover:bg-pink-600 active:bg-pink-700',
    outline: 'border border-pink-500 text-pink-600 hover:bg-pink-50',
    ghost: 'text-pink-600 hover:bg-pink-50',
    text: 'text-pink-600 hover:underline',
  },
  red: {
    solid: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
    outline: 'border border-red-500 text-red-600 hover:bg-red-50',
    ghost: 'text-red-600 hover:bg-red-50',
    text: 'text-red-600 hover:underline',
  },
  sky: {
    solid: 'bg-sky-500 text-neutral-900 hover:bg-sky-600 active:bg-sky-700',
    outline: 'border border-sky-500 text-sky-600 hover:bg-sky-50',
    ghost: 'text-sky-600 hover:bg-sky-50',
    text: 'text-sky-600 hover:underline',
  },
  slate: {
    solid: 'bg-slate-500 text-white hover:bg-slate-600 active:bg-slate-700',
    outline: 'border border-slate-500 text-slate-600 hover:bg-slate-50',
    ghost: 'text-slate-600 hover:bg-slate-50',
    text: 'text-slate-600 hover:underline',
  },
  yellow: {
    solid: 'bg-yellow-500 text-neutral-900 hover:bg-yellow-600 active:bg-yellow-700',
    outline: 'border border-yellow-500 text-yellow-600 hover:bg-yellow-50',
    ghost: 'text-yellow-600 hover:bg-yellow-50',
    text: 'text-yellow-600 hover:underline',
  },
};

// "danger" ignora a prop color de propósito: um botão destrutivo é sempre vermelho.
const dangerClasses = 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700';

const spinnerSizeClasses: Record<ButtonSize, string> = {
  xs: 'h-3 w-3',
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
  xl: 'h-6 w-6',
};

// Spinner interno do estado "loading" (era Button.icons.tsx antes da consolidação num
// arquivo único, ver ESTRUTURA.md) — não é exportado, só o Button usa.
function LoadingSpinner({ size }: { size: ButtonSize }) {
  return (
    <svg
      className={clsx('animate-spin text-current', spinnerSizeClasses[size])}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      data-testid="loading-spinner"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

/** Botão usado para disparar ações ou eventos do usuário. */
function Button({
  asChild,
  variant = 'solid',
  size = 'md',
  color = 'pink',
  className,
  children,
  ref,
  loading = false,
  disabled,
  IconLeft,
  IconRight,
  ...props
}: ButtonProps) {
  const Comp: React.ElementType = asChild ? Slot : 'button';
  const variantClasses = variant === 'danger' ? dangerClasses : colorClasses[color][variant];

  return (
    <Comp
      ref={ref}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      data-variant={variant}
      data-size={size}
      data-color={color}
      data-loading={loading || undefined}
      className={clsx(
        'mellow-Button inline-flex items-center justify-center rounded-md font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        sizeClasses[size],
        variantClasses,
        className,
      )}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {loading ? <LoadingSpinner size={size} /> : IconLeft ? <IconLeft aria-hidden /> : null}
          {children}
          {IconRight ? <IconRight aria-hidden /> : null}
        </>
      )}
    </Comp>
  );
}

export { Button, buttonVariants, buttonSizes, accentColors };
export type { ButtonProps, ButtonVariant, ButtonSize, ButtonColor };
