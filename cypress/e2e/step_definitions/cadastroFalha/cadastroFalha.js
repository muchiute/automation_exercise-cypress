import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import CadastroPage from "../../pageObjects/web/cadastroPage";

Given("que acesso a tela de cadastro", () => {
  CadastroPage.acessarSite();
  CadastroPage.clicarSignupLogin();
});

When("tento cadastrar com email já existente", () => {
  cy.fixture("usuario").then((usuario) => {
    cy.get('[data-qa="signup-name"]').type("Teste");
    cy.get('[data-qa="signup-email"]').type(usuario.email);
    cy.get('[data-qa="signup-button"]').click();
  });
});

Then("devo ver erro de email já existente", () => {
  cy.contains("Email Address already exist!").should("be.visible");
});