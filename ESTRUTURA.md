# 📁 Estrutura do Projeto

A organização do projeto foi planejada para manter o Design System escalável, reutilizável e de fácil manutenção. Cada pasta possui uma responsabilidade bem definida, seguindo o princípio de separação de responsabilidades.

> Este documento reflete a estrutura **real** do código, não um planejamento futuro. Pastas que ainda não existem não aparecem na árvore abaixo. Veja a seção "Ainda não implementado" no final para o que está planejado, mas só deve ser criado quando surgir um caso de uso real.

```text
mellow-ui/
│
├── .storybook/                  # Configuração do Storybook (addons, preview, ordenação de docs)
│
├── .changeset/                  # Configuração do Changesets (versionamento/changelog automatizado)
│   ├── config.json
│   └── README.md
│
├── .github/
│   └── workflows/
│       └── release.yml          # CI: abre PR de "Version Packages" e publica no npm ao mergear em main
│
├── public/                      # Arquivos estáticos servidos pelo Next.js e pelo Storybook (staticDirs)
│
├── app/                         # Playground Next.js usado só para desenvolvimento local - NÃO faz parte do pacote publicado no npm
│   ├── globals.css              # Importa src/styles/index.css (Tailwind + tema da lib) - único entry point de CSS do playground
│   ├── layout.tsx               # Layout raiz do playground, já envolvido pelo <Theme>
│   └── page.tsx                 # Página inicial (ainda o boilerplate do create-next-app)
│
├── dist/                        # Saída do build da lib ("npm run build:lib"): JS/d.ts compilados de src/ + CSS
│                                 # já processado pelo Tailwind CLI ("build:css"). É exatamente o que
│                                 # "files": ["dist"] publica no npm. Gerada, não versionada (está no
│                                 # .gitignore), pode não existir localmente até você buildar.
│
├── src/
│   │
│   ├── index.ts                 # Ponto de entrada público da biblioteca (reexporta components/ e icons/)
│   ├── vite-env.d.ts             # Referência de tipos do Vite (habilita import de *.md?raw, usado em Changelog.mdx)
│   │
│   ├── components/              # Componentes do Design System
│   │   ├── index.ts              # Barrel: reexporta cada componente publicado
│   │   │
│   │   ├── Theme/                # Componente raiz: só controla dark mode
│   │   │   ├── Theme.tsx         # Prop única (appearance: 'inherit' | 'light' | 'dark'), aplica classe "dark"/"light"
│   │   │   └── index.ts
│   │   │
│   │   └── Button/               # Primeiro componente real do Design System
│   │       ├── Button.tsx        # Componente + variantes + tamanhos + cores + tipos + spinner de loading, tudo num arquivo só
│   │       ├── Button.stories.tsx
│   │       ├── Button.test.tsx
│   │       ├── Button.docs.mdx
│   │       └── index.ts
│   │
│   ├── core/                    # Utilitários internos de composição - não fazem parte da API pública
│   │   ├── Slot.tsx              # Implementação própria do padrão "asChild" (equivalente ao Slot do Radix, sem depender dele)
│   │   ├── Slot.test.tsx
│   │   ├── composeRefs.ts
│   │   ├── composeRefs.test.ts
│   │   ├── composeEventHandlers.ts
│   │   ├── composeEventHandlers.test.ts
│   │   ├── mergeProps.ts
│   │   ├── mergeProps.test.ts
│   │   └── index.ts
│   │
│   ├── icons/                   # Wrapper de ícones sobre @phosphor-icons/react
│   │   ├── Icon.tsx              # Recebe o componente do ícone via prop `icon` (tree-shakable: não importa a lib inteira)
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── styles/
│   │   └── index.css             # Único arquivo de estilo da lib: @import "tailwindcss" + @theme (paleta de
│   │                             # cor de marca, escala de sombra, fonte padrão) + overrides de dark mode
│   │                             # (.dark) + @font-face de fallback. Todo o resto (espaçamento, radius,
│   │                             # tamanho de fonte, cursor) usa a escala nativa do Tailwind direto nos
│   │                             # componentes, sem token próprio.
│   │
│   └── docs/                    # Páginas de documentação em MDX, descobertas automaticamente pelo Storybook
│       │                        # (glob "../src/**/*.mdx" definido em .storybook/main.ts)
│       ├── introducao.mdx
│       ├── instalacao.mdx
│       ├── Cores.mdx            # "Em breve" - conteúdo real ainda por escrever
│       ├── Tipografia.mdx       # "Em breve" - conteúdo real ainda por escrever
│       ├── espacamento.mdx      # "Em breve" - conteúdo real ainda por escrever
│       ├── Acessibilidade.mdx
│       └── Changelog.mdx        # Renderiza o CHANGELOG.md da raiz via @storybook/addon-docs
│
├── CHANGELOG.md                 # Gerado automaticamente pelo Changesets a cada release
├── LICENSE
├── package.json
├── tsconfig.json
├── tsconfig.build.json          # tsconfig dedicado ao "build:lib" (rootDir/include restritos a src/,
│                                 # moduleResolution "nodenext"), desacoplado do tsconfig do Next.js
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── vitest.config.ts
└── README.md
```

---

# Responsabilidades das principais pastas

| Pasta | Responsabilidade |
|--------|------------------|
| **app** | Playground Next.js usado só para desenvolvimento local. Não faz parte da biblioteca publicada no npm (o script `build:lib` nunca lê esta pasta). |
| **dist** | Saída gerada por `npm run build:lib` — o que de fato é publicado no npm. Não é versionada (`.gitignore`) e pode não existir até você rodar o build; nunca edite nada aqui direto, edite em `src/`. |
| **components** | Contém todos os componentes do Design System, organizados individualmente em suas respectivas pastas, em Tailwind puro (classNames diretos no componente). `Theme` é só um wrapper de dark mode. `Button` é o primeiro componente real (variantes, tamanhos, 11 cores de marca, estado `loading`), consolidado num único `Button.tsx` — inclusive o spinner de loading, que era um arquivo `Button.icons.tsx` separado antes de ser incorporado. |
| **core** | Utilitários internos de composição (Slot/asChild, refs, event handlers, merge de props). Não são exportados publicamente — dão suporte à prop `asChild` dos componentes. Cobertos por testes unitários próprios (`*.test.ts(x)`, ao lado de cada arquivo). |
| **icons** | Wrapper fino sobre `@phosphor-icons/react`, pensado para preservar tree-shaking (recebe o ícone já importado pelo consumidor, em vez de resolver por nome em string). Reexportado publicamente por `src/index.ts` e pelo subpath `@softsues/mellow-ui/icons` no `exports` do `package.json`. |
| **styles** | Um único `index.css`: importa o Tailwind e define, em `@theme`, a paleta de cor de marca, a escala de sombra e a fonte padrão — os únicos valores fixados como token próprio. É o que o consumidor final importa via CSS (`@softsues/mellow-ui/styles/index.css`), já compilado pelo `npm run build:css` (Tailwind CLI); não exige Tailwind instalado em quem consome. |
| **docs** | Páginas de documentação em MDX exibidas no Storybook (fundamentos, tokens, guias de uso, changelog). |
| **.storybook** | Configuração do Storybook: addons, preview, decorators e ordenação das páginas de documentação. |
| **.changeset** | Configuração do Changesets — versionamento e changelog automatizados via `npm run changeset`. |
| **.github/workflows** | CI de release: ao mergear em `main`, abre PR de "Version Packages" e, ao mergear esse PR, publica no npm e cria a tag/Release no GitHub. |
| **public** | Arquivos estáticos servidos pelo Next.js (`app/`) e pelo Storybook (`staticDirs`). |

---

# Princípios da arquitetura

- Cada pasta possui uma única responsabilidade.
- Os componentes usam classNames do Tailwind diretamente — sem sistema próprio de props/tokens/utilities. As únicas exceções fixadas como token (`@theme` em `src/styles/index.css`) são cor de marca, sombra e fonte padrão, porque não têm equivalente nativo satisfatório no Tailwind; todo o resto (espaçamento, radius, tamanho de fonte, cursor) usa a escala nativa do Tailwind.
- O dark mode é resolvido pelo componente `Theme`, que só aplica a classe `.dark`/`.light` no DOM — as cores trocam sozinhas porque `--color-*` é reatribuída dentro de `.dark` em `src/styles/index.css`, sem precisar de prefixo `dark:` nos componentes.
- Tailwind é ferramenta só de build para a lib: `npm run build:css` compila as classes usadas pelos componentes num CSS final em `dist/styles`. Quem consome a biblioteca não precisa ter Tailwind instalado — só importa o CSS já pronto.
- Os componentes são documentados individualmente através do Storybook.
- A estrutura foi projetada para facilitar a publicação futura do Design System como uma biblioteca reutilizável (`package.json` já expõe `.`, `./components/*` e `./styles/*`).

---

# Ainda não implementado

As pastas abaixo **não existem no código hoje**. Ficam registradas aqui só como intenção futura, a intenção deste documento é criá-las quando o primeiro caso de uso real aparecer, não antes disso, para não repetir uma árvore "prometida" e nunca construída:

| Pasta futura | Quando criar |
|--------|------------------|
| **hooks/** | No dia em que um hook React precisar ser compartilhado por mais de um componente (ex.: `useControllableState`). |
| **providers/** | Se surgir um Context além do `Theme` que precise ser compartilhado (ex.: Toast, Modal). |
| **utils/** | No dia em que uma função utilitária (não ligada a estilo) precisar ser compartilhada entre componentes — ex.: se `accentColors`/`colorClasses` de `Button.tsx` precisarem ser reaproveitados por um segundo componente. |
| **types/** | Se surgirem tipos verdadeiramente globais que não pertençam a um componente específico. |
