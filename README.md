# Cypress Testes Automatizados

Este projeto contém testes automatizados utilizando Cypress para testes de API e WEB.

## Projeto no Github

[Github](https://github.com/muchiute/automation_exercise-cypress)

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

---

## ⚙️ Tecnologias e versões utilizadas

Antes de executar o projeto, é necessário ter instalado:

- [Node.js >= 18]
- [Cypress 13.x]
- [JavaScript (ES6+)]
- [Faker.js]
- [Git]
- [VsCode](https://code.visualstudio.com/)
- [Cypress](https://www.cypress.io/)

---

## 🚀 Instalação do projeto


git clone https://github.com/muchiute/automation_exercise-cypress.git
cd automation_exercise-cypress
npm install

## Comandos para execução dos testes

- `npm install` (comando para instalar as dependências antes de executar os comandos abaixo)
- `npx cypress run` (Modo: Headless sem interface gráfica)
- `npx cypress open` (Modo: Interactive Mode com interface gráfica)


# Estratégia de testes

## Este projeto aplica boas práticas de automação:

- Page Object Model (POM)
- Factory Pattern para dados dinâmicos
- Separação entre testes e lógica
- Reutilização via Custom Commands
- Validações de UI e API
- Uso de dados dinâmicos para evitar dependências

--- 

## 🧪 Massa de dados
Dados estáticos: fixtures/
Dados dinâmicos: Faker.js
Geração de usuários únicos para testes de cadastro

---

## 📈 Evidências de execução

O projeto gera automaticamente:

Screenshots em caso de falha
Vídeos da execução dos testes