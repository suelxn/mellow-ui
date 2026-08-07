# 📁 Estrutura do Projeto

A organização do projeto foi planejada para manter o Design System escalável, reutilizável e de fácil manutenção. Cada pasta possui uma responsabilidade bem definida, seguindo o princípio de separação de responsabilidades.

> Este documento reflete a estrutura **real** do código, não um planejamento futuro. Pastas que ainda não existem não aparecem na árvore abaixo. Veja a seção "Ainda não implementado" no final para o que está planejado, mas só deve ser criado quando surgir um caso de uso real.

```text
mellow-ui/
│
├── .storybook/                  # Configuração do Storybook (addons, preview, ordenação de docs)
│
├── public/                      # Arquivos estáticos servidos pelo Next.js e pelo Storybook (staticDirs)
│
├── app/                         # Playground Next.js usado só para desenvolvimento local — NÃO faz parte do pacote publicado no npm
│   ├── globals.css              # Importa Tailwind (escopo exclusivo deste playground) + src/styles/index.css
│   ├── layout.tsx               # Layout raiz do playground, já envolvido pelo <Theme>
│   └── page.tsx                 # Página inicial (ainda o boilerplate do create-next-app)
│
├── src/
│   │
│   ├── index.ts                 # Ponto de entrada público da biblioteca (export * from './components')
│   │
│   ├── components/              # Componentes do Design System
│   │   ├── index.ts              # Barrel: reexporta cada componente publicado
│   │   ├── index.css             # Agrega o CSS de cada componente, conforme forem sendo construídos
│   │   │
│   │   ├── Theme/                # Componente raiz: Context de tema + atributos data-* no DOM
│   │   │   ├── Theme.tsx
│   │   │   ├── Theme.props.ts    # Objeto de especificação das props (PropDef) e seus defaults
│   │   │   ├── Theme.types.ts    # Tipos derivados de Theme.props.ts via GetPropDefTypes
│   │   │   └── index.ts
│   │   │
│   │   └── Button/               # Scaffold criado, implementação ainda pendente (arquivos vazios)
│   │       ├── Button.tsx
│   │       ├── Button.types.ts
│   │       ├── Button.stories.tsx
│   │       ├── Button.test.tsx
│   │       └── index.ts
│   │
│   ├── core/                    # Utilitários internos de composição — não fazem parte da API pública
│   │   ├── Slot.tsx              # Implementação própria do padrão "asChild" (equivalente ao Slot do Radix, sem depender dele)
│   │   ├── composeRefs.ts
│   │   ├── composeEventHandlers.ts
│   │   ├── mergeProps.ts
│   │   └── index.ts
│   │
│   ├── props/                   # Sistema compartilhado de definição de props ("prop-def"), usado por todos os componentes
│   │   ├── prop-def.ts           # Tipos base: PropDef, Responsive<T>, breakpoints, GetPropDefTypes
│   │   ├── as-child.prop.ts
│   │   ├── color.prop.ts
│   │   ├── gap.props.ts
│   │   ├── height.props.ts
│   │   ├── high-contrast.prop.ts
│   │   ├── layout.props.ts       # Agrega padding/width/height + position, overflow, flex e grid
│   │   ├── leading-trim.prop.ts
│   │   ├── margin.props.ts
│   │   ├── padding.props.ts
│   │   ├── radius.prop.ts
│   │   ├── scaling.prop.ts
│   │   ├── text-align.prop.ts
│   │   ├── text-wrap.prop.ts
│   │   ├── truncate.prop.ts
│   │   ├── weight.prop.ts
│   │   ├── width.props.ts
│   │   └── index.ts
│   │
│   ├── icons/                   # Wrapper de ícones sobre @phosphor-icons/react
│   │   ├── Icon.tsx              # Recebe o componente do ícone via prop `icon` (tree-shakable: não importa a lib inteira)
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── styles/                  # Design Tokens + utilitários CSS publicados junto com a biblioteca
│   │   ├── index.css             # Entry point: breakpoints + tokens + CSS dos componentes + utilities
│   │   ├── breakpoints.css       # @custom-media dos breakpoints responsivos (xs, sm, md, lg, xl)
│   │   │
│   │   ├── tokens/
│   │   │   ├── index.css
│   │   │   ├── base.css          # Agrega color, cursor, layout, radius, shadow, typography
│   │   │   ├── color.css         # Mapeamento semântico (--accent-*, --gray-*, --color-*) sobre as paletas primitivas
│   │   │   ├── colors/           # Paletas primitivas
│   │   │   │   ├── index.css
│   │   │   │   ├── absolute.css      # --white, --black, --transparent
│   │   │   │   ├── blue.css, coral.css, green.css, mint.css, pink.css, red.css, sky.css, yellow.css  # 8 accent colors
│   │   │   │   └── neutral.css, slate.css                                                            # 2 famílias de gray
│   │   │   ├── cursor.css
│   │   │   ├── layout.css        # --scaling + --space-*
│   │   │   ├── radius.css
│   │   │   ├── scaling.css
│   │   │   ├── shadow.css
│   │   │   ├── space.css
│   │   │   └── typography.css
│   │   │
│   │   └── utilities/            # Classes utilitárias responsivas (prefixo "mui-"): gap, margin, padding, flex, grid, position etc.
│   │       └── index.css
│   │
│   └── docs/                    # Páginas de documentação em MDX, descobertas automaticamente pelo Storybook
│       │                        # (glob "../src/**/*.mdx" definido em .storybook/main.ts)
│       ├── introducao.mdx
│       ├── instalacao.mdx
│       ├── cores.mdx
│       ├── tipografia.mdx
│       ├── espacamento.mdx
│       └── acessibilidade.mdx
│
├── LICENSE
├── package.json
├── tsconfig.json
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
| **components** | Contém todos os componentes do Design System, organizados individualmente em suas respectivas pastas. |
| **core** | Utilitários internos de composição (Slot/asChild, refs, event handlers, merge de props). Não são exportados publicamente — dão suporte à prop `asChild` dos componentes. |
| **props** | Sistema compartilhado de definição de props ("prop-def"): cada arquivo descreve uma prop reutilizável (cor, espaçamento, layout, tipografia...) de forma tipada, com a classe CSS utilitária correspondente. É a base sobre a qual os componentes vão declarar suas próprias props. |
| **icons** | Wrapper fino sobre `@phosphor-icons/react`, pensado para preservar tree-shaking (recebe o ícone já importado pelo consumidor, em vez de resolver por nome em string). |
| **styles** | Design Tokens (`tokens/`) e classes utilitárias (`utilities/`) publicados junto com a biblioteca. É o que o consumidor final importa via CSS (`mellow-ui/styles/...`). |
| **docs** | Páginas de documentação em MDX exibidas no Storybook (fundamentos, tokens, guias de uso). |
| **.storybook** | Configuração do Storybook: addons, preview, decorators e ordenação das páginas de documentação. |
| **public** | Arquivos estáticos servidos pelo Next.js (`app/`) e pelo Storybook (`staticDirs`). |

---

# Princípios da arquitetura

- Cada pasta possui uma única responsabilidade.
- Os componentes não possuem dependência direta de cores ou valores fixos; toda estilização deve utilizar os Design Tokens em `src/styles/tokens`.
- O tema (claro/escuro, cor de destaque, cor neutra, radius, scaling) é resolvido em runtime pelo componente `Theme` via Context + atributos `data-*` no DOM, que os tokens em `src/styles/tokens` leem para calcular suas CSS custom properties — não existem arquivos de tema separados por variante (`light.css`/`dark.css`); a variação de tema inteira vive nos seletores `:is(.dark, .dark-theme)` dentro dos próprios arquivos de token.
- As classes utilitárias geradas a partir de `src/props` usam o prefixo `mui-` (identidade própria do Mellow UI)
- Os componentes são documentados individualmente através do Storybook.
- A estrutura foi projetada para facilitar a publicação futura do Design System como uma biblioteca reutilizável (`package.json` já expõe `.`, `./components/*` e `./styles/*`).

---

# Ainda não implementado

As pastas abaixo **não existem no código hoje**. Ficam registradas aqui só como intenção futura — a lição deste documento é criá-las quando o primeiro caso de uso real aparecer, não antes disso, para não repetir uma árvore "prometida" e nunca construída:

| Pasta futura | Quando criar |
|--------|------------------|
| **hooks/** | No dia em que um hook React precisar ser compartilhado por mais de um componente (ex.: `useControllableState`). |
| **providers/** | Se surgir um Context além do `Theme` que precise ser compartilhado (ex.: Toast, Modal). |
| **utils/** | No dia em que uma função utilitária (não ligada a props/estilo) precisar ser compartilhada entre componentes. |
| **types/** | Se surgirem tipos verdadeiramente globais que não pertençam a `props/` nem a um componente específico. |
