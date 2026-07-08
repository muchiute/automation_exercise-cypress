# Cypress Testes Automatizados

Este projeto contém testes automatizados utilizando Cypress para testes Web e API.

O framework utiliza boas práticas de automação como Page Object Model, Service Object Model, BDD com Cucumber, geração de relatórios, evidências de execução e organização por tags.

---

## Projeto no Github

[Github](https://github.com/muchiute/automation_exercise-cypress)

---

# Descrição do Projeto

## WEB

Automação dos principais fluxos da aplicação:

- Realiza login com sucesso e valida usuário autenticado;
- Valida login com credenciais inválidas;
- Realiza cadastro de usuário com dados dinâmicos utilizando Faker.js;
- Valida erro ao tentar cadastrar email já existente;
- Busca produtos e valida resultados;
- Adiciona produtos ao carrinho;
- Realiza fluxo completo de compra até o pagamento;
- Valida produtos, preço, quantidade e subtotal durante o checkout.

---

## API (Trello)

Automação dos cenários de API:

- Realiza requisição GET na API do Trello;
- Valida status code HTTP;
- Valida estrutura do retorno da API;
- Valida informações da lista (`list`) retornada no response;
- Valida que o nome da lista não está vazio;
- Possui logs de request e response para facilitar análise.

---

# Features

## WEB

- [x] Login com sucesso
- [x] Login sem sucesso
- [x] Cadastro de usuário com sucesso
- [x] Cadastro com email já existente
- [x] Buscar produtos
- [x] Adicionar produto ao carrinho
- [x] Fluxo completo de compra (End-to-End)
- [x] Checkout e pagamento

---

## API

- [x] GET na API do Trello
- [x] Validação de status code
- [x] Validação do nome da lista
- [x] Validação de contrato da resposta

---

# ⚙️ Tecnologias e versões utilizadas

Antes de executar o projeto, é necessário ter instalado:

- Node.js >= 18
- Cypress 13.x
- JavaScript (ES6+)
- Git
- VS Code
- Faker.js

---

# Frameworks e bibliotecas utilizadas

## Cypress

Framework principal utilizado para automação de testes end-to-end.

Responsável por:

- Automação Web;
- Testes de API;
- Controle de execução;
- Captura de evidências;
- Execução em modo headless e interativo.

Documentação:

https://www.cypress.io/

---

## Cypress Cucumber Preprocessor

Utilizado para implementação do padrão BDD (Behavior Driven Development).

Permite criação dos cenários utilizando arquivos `.feature` escritos em Gherkin.

Exemplo:

```gherkin
Feature: Login

@login
Scenario: Login com sucesso

Given que acesso a página de login
When informo usuário e senha
Then devo visualizar usuário autenticado
```

Benefícios:

- Cenários mais próximos da linguagem de negócio;
- Melhor organização dos testes;
- Execução utilizando tags.

---

## Mocha

Framework de testes utilizado pelo Cypress.

Responsável por:

- Estruturação dos testes;
- Controle do ciclo de execução;
- Utilização dos hooks:

```javascript
before()
beforeEach()
afterEach()
after()
```

---

## Mochawesome Reporter

Utilizado para geração de relatórios de execução.

Recursos:

- Relatórios HTML;
- Arquivos JSON;
- Histórico das execuções;
- Evidências dos testes.

---

## Cypress Terminal Report

Utilizado para geração de logs detalhados da execução dos testes.

Auxilia na análise de:

- Falhas;
- Fluxo executado;
- Debugging.

---

## Faker.js

Utilizado para criação de dados dinâmicos.

Exemplos:

- Usuários;
- Emails únicos;
- Massa de teste.

---

# 🚀 Instalação do projeto

Clonar o repositório:

```bash
git clone https://github.com/muchiute/automation_exercise-cypress.git
```

Acessar o projeto:

```bash
cd automation_exercise-cypress
```

Instalar dependências:

```bash
npm install
```

---

# Comandos para execução dos testes

Os comandos estão configurados no arquivo `package.json`.

---

## Abrir Cypress com interface gráfica

```bash
npm run test
```

Executa os testes no modo interativo.

---

## Executar todos os testes em modo Headless

```bash
npm run test:headless
```

Executa toda a suíte de testes pelo terminal.

Utilizado principalmente em:

- Pipeline CI/CD;
- Execuções automatizadas.

---

## Executar testes de Login

```bash
npm run test:login
```

Executa somente cenários com a tag:

```gherkin
@login
```

---

## Executar testes de API

```bash
npm run test:api
```

Executa somente cenários com a tag:

```gherkin
@api
```

---

## Executar testes Smoke

```bash
npm run test:smoke
```

Executa cenários críticos utilizando:

```gherkin
@smoke
```

---

## Gerar relatório

```bash
npm run generate-report
```

Responsável por:

- Unir arquivos JSON gerados pelo Mochawesome;
- Criar relatório HTML consolidado.

---

# Estratégia de testes

Este projeto aplica boas práticas de automação:

- Page Object Model (POM);
- Service Object Model para APIs;
- Factory Pattern para dados dinâmicos;
- Separação entre testes e lógica;
- Reutilização via Custom Commands;
- Locators centralizados;
- Validações de UI e API;
- Esperas explícitas;
- Uso de dados dinâmicos para evitar dependências.

---

# Organização dos testes

Estrutura principal:

```
cypress
│
├── e2e
│   ├── *.feature
│   ├── step_definitions
│   └── pageObjects
│       ├── web
│       └── api
│
├── fixtures
│
├── support
│   ├── commands.js
│   └── e2e.js
│
├── screenshots
├── videos
├── logs
└── reports
```

---

# 🧪 Massa de dados

Utilização de diferentes estratégias:

## Dados estáticos

Local:

```
cypress/fixtures
```

Utilizados para dados fixos dos testes.

---

## Dados dinâmicos

Utilizando:

```
Faker.js
```

Aplicado principalmente em:

- Cadastro de usuários;
- Geração de informações únicas.

---

# 🏷️ Tags dos testes

Os cenários utilizam tags Cucumber para facilitar a execução por grupos.

Exemplos:

```gherkin
@login
```

Testes relacionados a login.

```gherkin
@api
```

Testes relacionados a API.

```gherkin
@checkout
```

Testes relacionados ao fluxo de compra.

```gherkin
@regressao
```

Testes de regressão.

Benefícios:

- Execução seletiva;
- Organização das suítes;
- Facilita integração com CI/CD.

---

# 📈 Evidências de execução

O projeto gera automaticamente:

## Screenshots

Capturados para:

- Testes aprovados;
- Testes com falha.

Local:

```
cypress/screenshots
```

---

## Vídeos

Gravação da execução dos testes.

Local:

```
cypress/videos
```

Utilizados para análise de:

- Falhas;
- Comportamentos inesperados;
- Testes instáveis.

---

## Logs

Logs detalhados da execução:

```
cypress/logs
```

Incluindo informações para investigação de problemas.

---

# Configurações

O projeto permite parametrização através de variáveis de ambiente:

| Variável | Descrição |
|---|---|
| BASE_URL | URL da aplicação |
| API_URL | Endpoint da API |
| DEFAULT_COMMAND_TIMEOUT | Timeout dos comandos Cypress |
| REQUEST_TIMEOUT | Timeout das requisições |
| RESPONSE_TIMEOUT | Timeout das respostas |
| RUN_RETRIES | Quantidade de tentativas em caso de falha |

Exemplo:

```bash
BASE_URL=https://ambiente-teste.com npm run test:headless
```

---

# Autor

Lucas Muchiute