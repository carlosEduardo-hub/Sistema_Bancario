# Simulador de Sistema Bancário

## Descrição

O Simulador de Sistema Bancário é uma aplicação desenvolvida em React que simula o funcionamento de um sistema bancário básico. Ele permite que os usuários realizem operações de entrada e saída de fundos, visualizem seu saldo atual e consultem um histórico de transações.A aplicação possui tela de cadastro e login com autenticação jwt feita a partir das requisições utilizando axios para um arquivo "server.js", possui validação de routas, ou seja as rotas de cadastro e login são liberadas, já a que acessa o interior da aplicação é privada, o sistema bancario consiste em 3 campos(entrada,saída e saldo), o usuário pode simular transações que interferem nos valores de entrada e saída,consequentemente o saldo vai mudando,as transações ficam salvas  são mostradas no histórico.

## Funcionalidades

- **Autenticação de Usuários:** A aplicação oferece funcionalidades de cadastro e login. A autenticação é realizada utilizando JSON Web Tokens (JWT), garantindo a segurança das informações dos usuários.

- **Operações Financeiras:** Os usuários podem realizar operações de entrada (depósito) e saída (saque) de fundos. Cada operação é registrada e reflete diretamente no saldo total do usuário.

- **Histórico de Transações:** Todas as transações realizadas são registradas e exibidas em um histórico, permitindo que os usuários visualizem suas atividades financeiras passadas.

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **Styled-components:** Biblioteca para estilização de componentes React, permitindo a criação de estilos de forma mais dinâmica e modular.
- **Axios:** Cliente HTTP baseado em Promises para realizar requisições HTTP no navegador e no Node.js.
- **JWT (JSON Web Tokens):** Protocolo utilizado para autenticação e segurança na transmissão de informações entre partes.

## Como Rodar a Aplicação

Para rodar a aplicação localmente, siga os passos abaixo:

1. **Clone o Repositório:** Faça um clone deste repositório para o seu computador utilizando o comando `git clone https://github.com/seu-usuario/simulador-sistema-bancario.git`.

2. **Instale as Dependências:** Navegue até a pasta do projeto e execute o comando `yarn install` no terminal para instalar todas as dependências necessárias.

3. **Inicie o Servidor Local:** Execute o comando `node server.js` para iniciar o servidor local.

4. **Inicie a Aplicação:** Execute o comando `yarn start` para iniciar a aplicação em um ambiente de desenvolvimento. A aplicação estará disponível em `http://localhost:3000`.

### Autor: Carlos Eduardo Mendes de Oliveira.

