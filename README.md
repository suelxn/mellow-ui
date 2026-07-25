# Mellow UI Design System - Storybook

Este repositório centraliza o desenvolvimento isolado, os testes visuais e a documentação viva de todos os componentes de interface (UI) do Design System que estou desenvolvendo no Figma. 

Através do Storybook, é possível garantir consistência visual, acessibilidade e agilidade para o desenvolvimento de produtos.

## 🚀 Tecnologias Utilizadas

O projeto foi estruturado utilizando a stack moderna de desenvolvimento frontend:

* **Next.js** (Framework React principal)
* **Vite** (Bundler de alto desempenho para o ambiente do Storybook)
* **React** (Biblioteca de interface)
* **TypeScript** (Tipagem estática e segurança no código)
* **Tailwind CSS** (Estilização baseada em utilitários e design tokens)


## 🐧 Ambiente de Desenvolvimento (Linux)

Este projeto está sendo construído e mantido utilizando o sistema operacional **Linux (Mint Cinnamon 22.3)**. 

Por conta disso, o repositório pode conter algumas pastas, dependências ocultas ou arquivos de configuração específicos. Eles foram incluídos para garantir a compatibilidade do ambiente de compilação, permitindo que o Storybook e o compilador de estilos rodem perfeitamente na arquitetura Linux.


## 🛠️ Como Iniciar o Projeto

Siga os passos abaixo para rodar o ambiente de desenvolvimento local.

### Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina.

### Instalação

No diretório raiz do projeto, instale as dependências:

npm install
ou usando pnpm / yarn
pnpm install

### Executando o Storybook

Para iniciar o servidor do Storybook e visualizar o catálogo de componentes interativos:

npm run storybook
ou
pnpm storybook

O ambiente será aberto automaticamente no seu navegador, geralmente no endereço http://localhost:6006.

### Executando o projeto Next.js

Caso precise rodar a aplicação principal do Next.js paralelamente:

npm run dev
ou
pnpm dev

A aplicação estará disponível em http://localhost:3000.

## 📂 Estrutura de Pastas

Para manter o ecossistema organizado, os componentes e suas respectivas histórias devem seguir a estrutura:

(em construção)

## 📄 Scripts Disponíveis

No arquivo package.json, os principais comandos disponíveis são:

* npm run storybook: Inicia o ambiente local do Storybook na porta 6006.
* npm run build-storybook: Gera a versão estática e otimizada do Storybook para deploy e homologação.
* npm run dev: Inicia o servidor de desenvolvimento do Next.js.
* npm run build: Compila a aplicação Next.js para produção.