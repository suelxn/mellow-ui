import React, { forwardRef } from 'react';
import { ButtonProps } from './Button.types';
import { buttonVariants } from './Button.styles';
import { DEFAULT_BUTTON_VARIANT, DEFAULT_BUTTON_SIZE } from './Button.constants';
import { LoadingSpinner } from './Button.icons';
import { cn } from './Button.utils';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = DEFAULT_BUTTON_VARIANT,
      size = DEFAULT_BUTTON_SIZE,
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        {...props}
      >
        {isLoading && <LoadingSpinner size={size} />}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        {children && <span>{children}</span>}
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';