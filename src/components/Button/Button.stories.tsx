import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArrowRightIcon, PaperPlaneTiltIcon } from '@phosphor-icons/react';

import { Button, buttonSizes, buttonVariants, accentColors } from './Button';

const meta = {
  title: 'Componentes/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    variant: { control: 'select', options: buttonVariants },
    size: { control: 'select', options: buttonSizes },
    color: { control: 'select', options: accentColors },
    // Ícones são componentes (não dá pra controlar por um campo do painel), então tiram a
    // coluna de controle da tabela, mas continuam documentados na descrição da prop.
    IconLeft: { control: false },
    IconRight: { control: false },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: { variant: 'solid' },
};

export const Outline: Story = {
  args: { variant: 'outline' },
};

export const Danger: Story = {
  args: { variant: 'danger' },
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
};

export const Text: Story = {
  args: { variant: 'text' },
};

export const Disabled: Story = {
  args: { variant: 'solid', disabled: true },
};

export const Loading: Story = {
  args: { variant: 'solid', loading: true, children: 'Enviando' },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <a href="#exemplo">Button como link (asChild)</a>,
  },
};

export const WithIcon: Story = {
  args: {
    IconLeft: PaperPlaneTiltIcon,
    children: 'Enviar',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      {buttonSizes.map((size) => (
        <Button key={size} {...args} size={size}>
          Button
        </Button>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
      {accentColors.map((color) => (
        <Button key={color} {...args} color={color} IconRight={ArrowRightIcon}>
          {color}
        </Button>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};
