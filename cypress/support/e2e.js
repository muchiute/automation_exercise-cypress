import "./commands";
import "cypress-mochawesome-reporter/register";
import "cypress-log-to-output";

before(() => {
  cy.log("🚀 Iniciando execução da suíte");
});

beforeEach(() => {
  // limpa estado do browser
  cy.clearCookies();
  cy.clearLocalStorage();

  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
  cy.visit("/");
});

afterEach(function () {
  // só tira screenshot se falhar
  if (this.currentTest.state === "failed") {
    cy.screenshot(
      `FAIL - ${Cypress.spec.name} - ${this.currentTest.title}`,
      { capture: "runner" }
    );
  }
});