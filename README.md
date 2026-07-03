# Cypress Testes Automatizados

Este projeto contém testes automatizados utilizando Cypress para testes de API e WEB.

## Projeto no Github

[Github](link do git)

## Descrição do Projeto

### WEB
- Realiza login com sucesso e valida usuário autenticado;
- Valida login com credenciais inválidas;
- Realiza cadastro de usuário com dados dinâmicos (Faker);
- Valida erro ao tentar cadastrar email já existente;
- Busca produtos e valida resultados;
- Adiciona produtos ao carrinho;
- Realiza fluxo completo de compra até o pagamento;
- Valida produtos no carrinho durante o checkout.

### API (Trello)
- Realiza requisição GET na API do Trello;
- Valida status code 200;
- Valida retorno da lista (`list`) no response;
- Valida que o nome da lista não está vazio;

---

## Features

### WEB
- [x] Login com sucesso
- [x] Login sem sucesso
- [x] Cadastro de usuário com sucesso
- [x] Cadastro com email já existente
- [x] Buscar produtos
- [x] Adicionar produto ao carrinho
- [x] Fluxo completo de compra (End-to-End)
- [x] Checkout e pagamento

### API
- [x] GET na API do Trello
- [x] Validação de status code
- [x] Validação do nome da lista

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
- [VsCode](https://code.visualstudio.com/)
- [Cypress](https://www.cypress.io/)

## Comandos para execução dos testes

- `npm install` (comando para instalar as dependências antes de executar os comandos abaixo)
- `npx cypress run` (Modo: Headless sem interface gráfica)
- `npx cypress open` (Modo: Interactive Mode com interface gráfica)