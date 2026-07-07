import { CadastroLocators } from "./locators/CadastroLocators";

class CadastroPage {
  acessarSite() {
    cy.visit("/");
  }

  clicarSignupLogin() {
    cy.contains(CadastroLocators.signupLogin)
      .should("be.visible")
      .click();
  }

  preencherNome(nome) {
    cy.safeType(CadastroLocators.signupName, nome);
  }

  preencherEmail(email) {
    cy.safeType(CadastroLocators.signupEmail, email);
  }

  clicarSignup() {
    cy.safeClick(CadastroLocators.signupButton);
  }

  preencherFormulario(usuario) {
    cy.get(CadastroLocators.genderMale)
      .should("be.visible")
      .check();

    cy.safeType(CadastroLocators.password, usuario.senha);

    cy.safeSelect(CadastroLocators.day, usuario.dia);
    cy.safeSelect(CadastroLocators.month, usuario.mes);
    cy.safeSelect(CadastroLocators.year, usuario.ano);

    cy.safeType(CadastroLocators.firstName, usuario.firstName);
    cy.safeType(CadastroLocators.lastName, usuario.lastName);
    cy.safeType(CadastroLocators.company, usuario.company);
    cy.safeType(CadastroLocators.address, usuario.address);

    cy.safeSelect(CadastroLocators.country, usuario.country);

    cy.safeType(CadastroLocators.state, usuario.state);
    cy.safeType(CadastroLocators.city, usuario.city);
    cy.safeType(CadastroLocators.zipcode, usuario.zipcode);
    cy.safeType(CadastroLocators.mobile, usuario.mobile);
  }

  clicarCriarConta() {
    cy.safeClick(CadastroLocators.createAccount);
  }

  validarContaCriada() {
    cy.contains(CadastroLocators.accountCreated)
      .should("be.visible");
  }
}

export default new CadastroPage();