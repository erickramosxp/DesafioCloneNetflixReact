# Clone da Netflix

[![Deploy](https://img.shields.io/badge/Vercel-Live-blue)](https://desafio-clone-netflix-react.vercel.app/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## Descrição

Este projeto é um clone da Netflix desenvolvido como parte da atividade 6 do curso de Desenvolvimento Full Stack Jr da +PraTi. O objetivo era recriar a interface da Netflix, observando o site original e permitindo customizações. O projeto inclui uma tela inicial, tela de login, uma tela com os destaques de cada categoria e um sistema de busca para encontrar filmes ou séries. Os dados dos filmes e séries foram obtidos da API do The Movie Database (TMDb).

O projeto foi desenvolvido utilizando **React** junto com **Vite** para um ambiente de desenvolvimento rápido e eficiente.

## Funcionalidades

- **Tela de Login**: Interface simples para login de usuário.
- **Tela Inicial**: Exibe os destaques de filmes e séries em várias categorias.
- **Sistema de Busca**: Permite a pesquisa de filmes e séries.
- **Popup de Detalhes**: Ao clicar em um filme ou série, um popup é exibido com detalhes adicionais.

## Demonstração

Você pode acessar a aplicação hospedada no Vercel através deste link: [Desafio Clone Netflix](https://desafio-clone-netflix-react.vercel.app/).

## Instalação

### Pré-requisitos

- Node.js v14 ou superior
- NPM ou Yarn

### Passos para instalar

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/desafio-clone-netflix-react.git
   ```
2. Entre no diretório do projeto:
   ```bash
   cd desafio-clone-netflix-react
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente:
   - Crie um arquivo .env na raiz do projeto com a seguinte variável:
   ```bash
   REACT_APP_TMDB_API_KEY=sua_chave_tmdb
   ```
6. Execute a aplicação:
   ```bash
   npm run dev
   ```


