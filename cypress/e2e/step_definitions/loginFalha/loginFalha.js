import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../pageObjects/web/LoginPage";

Given("que acesso a tela de login", () => {
  LoginPage.acessarLogin();
});

When("realizo login com dados inválidos", () => {
  LoginPage.realizarLogin("email@errado.com", "senhaerrada");
});

Then("devo ver mensagem de erro de login", () => {
  cy.contains("Your email or password is incorrect!").should("be.visible");
});