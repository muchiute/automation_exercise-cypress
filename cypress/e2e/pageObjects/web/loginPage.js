class LoginPage {
  acessarLogin() {
    cy.visit("/login");
  }

  informarEmail(email) {
    cy.get('[data-qa="login-email"]').type(email);
  }

  informarSenha(senha) {
    cy.get('[data-qa="login-password"]').type(senha);
  }

  clicarEntrar() {
    cy.get('[data-qa="login-button"]').click();
  }

  realizarLogin(email, senha) {
    this.informarEmail(email);
    this.informarSenha(senha);
    this.clicarEntrar();
  }

  validarLogin() {
    cy.contains("Logged in as").should("be.visible");
  }
}

export default new LoginPage();
