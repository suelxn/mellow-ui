/*
  Stories de EXEMPLO do Button (ver Button.tsx). Servem para validar a pipeline do
  Storybook/Vitest. APAGAR junto com o resto da pasta quando o Button de verdade do
  Design System for construído.
*/

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button } from './Button';
import { buttonSizes, buttonVariants } from './Button.props';
import { accentColors } from '../../props/color.prop';

const meta = {
  title: 'Componentes/Button (exemplo)',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    variant: { control: 'select', options: buttonVariants },
    size: { control: 'select', options: buttonSizes },
    color: { control: 'select', options: accentColors },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: { variant: 'solid' },
};

export const Soft: Story = {
  args: { variant: 'soft' },
};

export const Outline: Story = {
  args: { variant: 'outline' },
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
};

export const Disabled: Story = {
  args: { variant: 'solid', disabled: true },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <a href="#exemplo">Button como link (asChild)</a>,
  },
};
