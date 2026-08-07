/*
  Teste de EXEMPLO do Button (ver Button.tsx), escrito só para validar que a pipeline de
  testes (Vitest + Testing Library, rodando em navegador real via @storybook/addon-vitest)
  está funcionando de ponta a ponta. APAGAR junto com o resto da pasta quando o Button de
  verdade do Design System for construído.
*/

import { afterEach, describe, expect, test, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

// @testing-library/react não desmonta sozinho entre os testes no Vitest (isso é automático
// só com o setup do Jest); sem isso, o DOM de um teste vaza para o próximo.
afterEach(() => {
  cleanup();
});

describe('Button (exemplo)', () => {
  test('renderiza o texto do children em um <button>', () => {
    render(<Button>Enviar</Button>);

    const button = screen.getByRole('button', { name: 'Enviar' });
    expect(button).toBeTruthy();
    expect(button.tagName).toBe('BUTTON');
  });

  test('aplica os data-attributes de variant e size', () => {
    render(
      <Button variant="outline" size="3">
        Enviar
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'Enviar' });
    expect(button.getAttribute('data-variant')).toBe('outline');
    expect(button.getAttribute('data-size')).toBe('3');
  });

  test('dispara onClick ao ser clicado', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Enviar</Button>);
    await user.click(screen.getByRole('button', { name: 'Enviar' }));

    expect(handleClick).toHaveBeenCalledOnce();
  });

  test('fica desabilitado e não dispara onClick quando disabled', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Button disabled onClick={handleClick}>
        Enviar
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Enviar' });

    expect(button.hasAttribute('disabled')).toBe(true);
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('com asChild, funde as props no elemento filho em vez de renderizar um <button>', () => {
    render(
      <Button asChild>
        <a href="#exemplo">Enviar</a>
      </Button>,
    );

    const link = screen.getByRole('link', { name: 'Enviar' });
    expect(link.tagName).toBe('A');
    expect(link.getAttribute('href')).toBe('#exemplo');
    expect(link.className).toContain('mui-Button');
  });
});
