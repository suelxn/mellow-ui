import { createRef } from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { Slot } from './Slot';

afterEach(() => {
  cleanup();
});

describe('Slot', () => {
  test('renderiza o filho único, sem envolver em um elemento próprio', () => {
    render(
      <Slot data-testid="slot">
        <button>clique</button>
      </Slot>,
    );

    const el = screen.getByRole('button', { name: 'clique' });
    expect(el.tagName).toBe('BUTTON');
    expect(el).toHaveAttribute('data-testid', 'slot');
  });

  test('lança um erro com mensagem específica da lib quando recebe children inválido (string)', () => {
    expect(() => render(<Slot>{'texto puro'}</Slot>)).toThrow(
      '[mellow-ui] "asChild" espera um elemento React único e válido como filho.',
    );
  });

  test('lança um erro com mensagem específica da lib quando recebe múltiplos filhos', () => {
    expect(() =>
      render(
        <Slot>
          <span />
          <span />
        </Slot>,
      ),
    ).toThrow('[mellow-ui] "asChild" espera um elemento React único e válido como filho.');
  });

  test('concatena className do Slot com o do filho', () => {
    render(
      <Slot className="slot-class">
        <button className="child-class">clique</button>
      </Slot>,
    );

    expect(screen.getByRole('button')).toHaveClass('slot-class', 'child-class');
  });

  test('mescla o ref recebido com o ref que o filho já tinha', () => {
    const slotRef = createRef<HTMLButtonElement>();
    const childRef = vi.fn();

    render(
      <Slot ref={slotRef as never}>
        <button ref={childRef}>clique</button>
      </Slot>,
    );

    const el = screen.getByRole('button');
    expect(slotRef.current).toBe(el);
    expect(childRef).toHaveBeenCalledWith(el);
  });

  test('handlers on* do Slot e do filho são compostos (os dois disparam)', async () => {
    const calls: string[] = [];
    const slotOnClick = vi.fn(() => calls.push('slot'));
    const childOnClick = vi.fn(() => calls.push('child'));

    render(
      <Slot onClick={slotOnClick}>
        <button onClick={childOnClick}>clique</button>
      </Slot>,
    );

    screen.getByRole('button').click();

    expect(calls).toEqual(['slot', 'child']);
  });
});
