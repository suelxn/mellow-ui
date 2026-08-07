import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

import { playwright } from '@vitest/browser-playwright';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  // aria-query, lz-string e pretty-format são dependências transitivas de
  // @testing-library/dom (usada pelo setup do @storybook/addon-vitest) empacotadas em
  // CJS de um jeito que o esbuild não detecta/transforma corretamente no pre-bundling
  // do Vite quando só são alcançadas indiretamente (named export "sumindo" ou "exports is
  // not defined" no browser). Forçar a inclusão aqui resolve o interop e destrava os testes.
  optimizeDeps: {
    include: ['aria-query', 'lz-string', 'pretty-format'],
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
        },
      },
      {
        // Projeto separado para testes unitários "de verdade" (*.test.tsx), sem o plugin
        // storybookTest — o projeto "storybook" acima só descobre e roda *.stories.tsx
        // (cada story vira um teste); ele ignora "test.include" de propósito (a própria
        // lib avisa e descarta esse valor), então testes de unidade precisam do próprio
        // projeto para serem encontrados e executados.
        extends: true,
        test: {
          name: 'unit',
          include: ['src/**/*.test.{ts,tsx}'],
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
});
