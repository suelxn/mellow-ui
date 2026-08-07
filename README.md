# Mellow UI

Design System em React + TypeScript: componentes de interface, tokens de design (cor, tipografia, espaçamento, radius, sombra) e utilitários de layout, documentados e testados via Storybook e publicados como biblioteca no npm.

A arquitetura toma como referência conceitos consolidados no ecossistema React (padrão `asChild`/Slot, sistema de definição de props responsivas, tokens semânticos por CSS custom properties), mas é uma implementação própria: não depende de outras bibliotecas de componentes. Toda classe utilitária gerada usa o prefixo próprio `mui-` (Mellow UI).

## Status atual

Projeto em fase inicial. Já implementados:

- Sistema de tokens completo (cor — 8 accents + 2 grays com light/dark e Display P3 —, tipografia, espaçamento, radius, sombra, cursor).
- Sistema compartilhado de definição de props (`src/props`), responsivo por breakpoint.
- Utilitários internos de composição (`src/core`): `Slot`/`asChild`, merge de props, composição de refs e de event handlers.
- Componente `Theme` (raiz da árvore, controla aparência, cor de destaque, cor neutra, radius e scaling via Context + atributos `data-*`).
- Wrapper de ícones (`src/icons/Icon`) sobre `@phosphor-icons/react`, pensado para tree-shaking.

Ainda não implementados: os componentes de UI propriamente ditos (o primeiro, `Button`, existe só como scaffold vazio) e as páginas de documentação em MDX (`src/docs`, hoje vazias). Veja [ESTRUTURA.md](./ESTRUTURA.md) para o detalhamento completo de pastas e o que falta.

## 🚀 Tecnologias utilizadas

* **React 19** + **TypeScript** — biblioteca de componentes (`react`/`react-dom` são `peerDependencies`, não vêm embutidos no pacote).
* **Storybook 10** (com Vite) — desenvolvimento isolado, documentação viva e testes de acessibilidade (`addon-a11y`).
* **Vitest** + **Playwright** — testes de componente rodando em navegador real (Chromium), via `@storybook/addon-vitest`.
* **PostCSS** + `postcss-custom-media` — processamento dos tokens e utilitários CSS publicados com a biblioteca.
* **@phosphor-icons/react** — biblioteca de ícones consumida pelo wrapper `Icon` (`peerDependency`: quem usa o Design System instala essa dependência também).
* **Next.js** — usado só como playground local de desenvolvimento (pasta `app/`); **não faz parte do pacote publicado**.
* **Tailwind CSS** — usado só dentro do playground Next.js (`app/globals.css`), nunca nos componentes do Design System.

## 💻 Ambiente de desenvolvimento multiplataforma

Este projeto é desenvolvido e mantido alternando entre três sistemas operacionais: **Windows 11**, **Linux Mint Cinnamon** e **macOS**, com o objetivo de construir uma biblioteca com suporte real aos três, não só testada informalmente em um deles. Isso influencia algumas decisões do repositório:

- `.gitattributes` normaliza todos os arquivos de texto para `LF` (`text=auto eol=lf`), evitando divergências de line ending entre Windows e Unix.
- Nomes de arquivo evitam acentuação (ex.: `src/docs/introducao.mdx`, não `Introdução.mdx`) — macOS e Linux normalizam Unicode de forma diferente (NFD vs. NFC), o que pode fazer o Git enxergar o mesmo arquivo como alterado só por trocar de máquina.
- `package.json` define `"engines": { "node": ">=20" }` para manter a mesma versão mínima do Node nas três máquinas.
- Dependências nativas específicas de plataforma (como `sharp`, usada só pela otimização de imagem do Next.js no playground) ficam em `devDependencies`, nunca em `dependencies` — não fazem parte do pacote publicado e não devem ser forçadas em quem instalar o Design System.

### Pré-requisitos

- **Node.js 20+** (qualquer um dos três sistemas).
- Git configurado para não reescrever line endings automaticamente além do que `.gitattributes` já define (evite `core.autocrlf=true` no Windows; o padrão `input` é suficiente já que `.gitattributes` cuida da normalização).

## 🛠️ Como iniciar o projeto

No diretório raiz do projeto, instale as dependências:

```bash
npm install
```

### Rodar o Storybook (desenvolvimento dos componentes)

```bash
npm run storybook
```

Abre em [http://localhost:6006](http://localhost:6006).

### Rodar o playground Next.js

```bash
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000). Serve só para prototipar telas usando os componentes já publicados internamente — não é parte do pacote npm.

### Rodar os testes

```bash
npx vitest
```

Os testes de componente rodam via Storybook + Playwright (Chromium), configurados em `vitest.config.ts`.

## 📄 Scripts disponíveis

| Script | O que faz |
|---|---|
| `npm run storybook` | Inicia o Storybook em modo desenvolvimento (porta 6006). |
| `npm run build-storybook` | Gera a versão estática do Storybook (`storybook-static/`), para deploy/homologação. |
| `npm run dev` | Inicia o playground Next.js em modo desenvolvimento. |
| `npm run start` | Sobe o playground Next.js já compilado. |
| `npm run build:lib` | Compila `src/` para `dist/` (TypeScript + declarações de tipo) e copia os CSS de `src/styles` para `dist/styles`. É o que roda antes de publicar no npm (`prepublishOnly`). |
| `npm run build` | Roda `build:lib` e depois `build-storybook`. |
| `npm run lint` | Roda o ESLint no projeto. |

## 📂 Estrutura de pastas

Ver [ESTRUTURA.md](./ESTRUTURA.md) para a árvore completa e a responsabilidade de cada pasta.

## 📦 Consumindo a biblioteca

Depois de publicado no npm, um projeto consumidor instala:

```bash
npm install mellow-ui react react-dom @phosphor-icons/react
```

E importa os componentes e o CSS:

```tsx
import { Theme } from 'mellow-ui';
import 'mellow-ui/styles/index.css';

function App() {
  return (
    <Theme accentColor="pink" grayColor="auto" radius="medium">
      {/* ... */}
    </Theme>
  );
}
```

`react`, `react-dom` e `@phosphor-icons/react` são `peerDependencies`: o consumidor precisa tê-los instalados, mas não são duplicados dentro do pacote.

## Licença

[MIT](./LICENSE) © Suelen
