import { LoginLocators } from "./locators/LoginLocators";

class LoginPage {
  acessarLogin() {
    cy.visit("/login");
  }

  informarEmail(email) {
    cy.safeType(LoginLocators.email, email);
  }

  informarSenha(senha) {
    cy.safeType(LoginLocators.password, senha);
  }

  clicarEntrar() {
    cy.safeClick(LoginLocators.loginButton);
  }

  realizarLogin(email, senha) {
    this.informarEmail(email);
    this.informarSenha(senha);
    this.clicarEntrar();
  }

  validarLogin() {
    cy.contains(LoginLocators.loggedUser)
      .should("be.visible");
  }
}

export default new LoginPage();