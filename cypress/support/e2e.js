import "./commands";
import "cypress-mochawesome-reporter/register";
import "cypress-log-to-output";

before(() => {
  cy.log("🚀 Iniciando execução da suíte de testes");
});

beforeEach(() => {
  // Limpa o estado da aplicação
  cy.resetState();

  // Acessa a aplicação
  cy.visit("/");
});

afterEach(function () {
  const status = this.currentTest.state;
  const nomeTeste = `${Cypress.spec.name} - ${this.currentTest.title}`;

  if (status === "passed") {
    cy.screenshot(`PASS - ${nomeTeste}`, {
      capture: "runner",
    });
  }

  if (status === "failed") {
    cy.screenshot(`FAIL - ${nomeTeste}`, {
      capture: "runner",
    });
  }
});