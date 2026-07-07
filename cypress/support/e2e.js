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
  // Captura screenshot apenas em caso de falha
  if (this.currentTest.state === "failed") {
    cy.screenshot(
      `FAIL - ${Cypress.spec.name} - ${this.currentTest.title}`,
      {
        capture: "runner",
      }
    );
  }
});