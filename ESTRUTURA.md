# 📁 Estrutura do Projeto

A organização do projeto foi planejada para manter o Design System escalável, reutilizável e de fácil manutenção. Cada pasta possui uma responsabilidade bem definida, seguindo o princípio de separação de responsabilidades.

```text
design-system/
│
├── .storybook/                 # Configuração do Storybook (addons, preview, temas e documentação)
│
├── public/                     # Arquivos estáticos utilizados pelo Storybook ou pela aplicação
│
├── src/
│   │
│   ├── app/                    # Estrutura da aplicação Next.js (App Router)
│   │   ├── globals.css         # Arquivo principal que importa tokens, temas e estilos globais
│   │   ├── layout.tsx          # Layout raiz da aplicação
│   │   └── page.tsx            # Página inicial utilizada apenas para desenvolvimento
│   │
│   ├── components/             # Componentes do Design System
│   │   └── Component/
│   │       ├── Component.tsx          # Implementação do componente
│   │       ├── Component.types.ts     # Tipagens e interfaces
│   │       ├── Component.stories.tsx  # Documentação e exemplos no Storybook
│   │       ├── Component.test.tsx     # Testes automatizados
│   │       ├── Component.styles.ts    # Variantes e estilos complexos (quando necessário)
│   │       ├── Component.utils.ts     # Funções auxiliares específicas do componente (quando necessário)
│   │       ├── Component.constants.ts # Constantes do componente (quando necessário)
│   │       ├── Component.docs.mdx     # Documentação complementar (opcional)
│   │       └── index.ts               # Exportações públicas do componente
│   │
│   ├── tokens/                 # Design Tokens (cores, tipografia, espaçamento, etc.)
│   │   ├── primitives.css
│   │   ├── semantic.css
│   │   ├── typography.css
│   │   └── index.css
│   │
│   ├── themes/                 # Temas visuais (Light, Dark e futuros temas White Label)
│   │   ├── light.css
│   │   ├── dark.css
│   │   └── index.css
│   │
│   ├── styles/                 # Estilos globais, utilitários e regras compartilhadas
│   │   ├── base.css
│   │   └── index.css
│   │
│   ├── hooks/                  # Hooks React reutilizáveis compartilhados entre componentes
│   │   └── index.ts
│   │
│   ├── providers/              # Context Providers (Theme, Toast, Modal, etc.)
│   │   └── index.ts
│   │
│   ├── utils/                  # Funções utilitárias compartilhadas por toda a biblioteca
│   │   └── index.ts
│   │
│   ├── icons/                  # Biblioteca de ícones SVG utilizados pelos componentes
│   │   └── index.ts
│   │
│   ├── types/                  # Tipos globais compartilhados
│   │   └── index.ts
│   │
│   ├── docs/                   # Documentação adicional em MDX (Fundamentos, Tokens, Guia de Uso, etc.)
│   │
│   └── index.ts                # Exportação principal da biblioteca
│
├── package.json
├── tsconfig.json
├── eslint.config.mjs
├── next.config.ts
└── README.md
```

---

# Responsabilidades das principais pastas

| Pasta | Responsabilidade |
|--------|------------------|
| **app** | Ambiente de desenvolvimento utilizando o App Router do Next.js. Não faz parte da biblioteca publicada. |
| **components** | Contém todos os componentes do Design System, organizados individualmente em suas respectivas pastas. |
| **tokens** | Armazena todos os Design Tokens da biblioteca (cores, tipografia, espaçamento, sombras, animações, etc.). |
| **themes** | Define os temas visuais da biblioteca (Light, Dark e possíveis temas White Label). |
| **styles** | Contém estilos globais, reset CSS e utilitários compartilhados. |
| **hooks** | Hooks React reutilizáveis utilizados pelos componentes. |
| **providers** | Context Providers compartilhados pela biblioteca. |
| **utils** | Funções utilitárias independentes de componentes. |
| **icons** | Biblioteca centralizada de ícones SVG. |
| **types** | Tipos e interfaces compartilhadas entre diferentes módulos da biblioteca. |
| **docs** | Documentação complementar exibida no Storybook, como princípios, tokens e guias de utilização. |
| **.storybook** | Configuração do Storybook, incluindo addons, preview, temas e comportamento da documentação. |

---

# Princípios da arquitetura

- Cada pasta possui uma única responsabilidade.
- Os componentes não possuem dependência direta de cores ou valores fixos; toda estilização deve utilizar os Design Tokens.
- Os temas são responsáveis por definir os valores dos tokens semânticos, permitindo reutilização da biblioteca em diferentes produtos ou marcas.
- Os componentes são documentados individualmente através do Storybook.
- Hooks, utilitários, tipos e providers são compartilhados por toda a biblioteca para evitar duplicação de código.
- A estrutura foi projetada para facilitar a publicação futura do Design System como uma biblioteca reutilizável.