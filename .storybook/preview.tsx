import type { Preview } from "@storybook/nextjs-vite";

import { Theme } from "../src/components";
// Importa só o CSS publicado da própria lib (tokens + utilities), sem passar por
// app/globals.css: aquele arquivo carrega o Tailwind inteiro (Preflight incluso), que é só
// pro playground Next.js e nunca deve vazar pros componentes do Design System (ver README).
// O Storybook precisa refletir exatamente o que um consumidor sem Tailwind instalado vê.
import "../src/styles/index.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],

  parameters: {
    layout: "centered",

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    options: {
      storySort: {
        order: [
          "Introdução",
          "Fundamentos",
          "Tokens",
          "Componentes",
          "*",
          "Changelog",
        ],
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;
