import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../pageObjects/web/LoginPage";

Given("que acesso a tela de login", () => {
  LoginPage.acessarLogin();
});

When("realizo login com dados válidos", function () {
  cy.fixture("usuario").then((usuario) => {
    LoginPage.realizarLogin(usuario.email, usuario.senha);
  });
});

Then("devo ver o usuário logado na tela", () => {
  LoginPage.validarLogin();
});