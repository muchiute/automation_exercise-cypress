class CadastroPage {
  acessarSite() {
    cy.visit("/");
  }

  clicarSignupLogin() {
    cy.contains("Signup / Login").click();
  }

  preencherNome(nome) {
    cy.get('[data-qa="signup-name"]').type(nome);
  }

  preencherEmail(email) {
    cy.get('[data-qa="signup-email"]').type(email);
  }

  clicarSignup() {
    cy.get('[data-qa="signup-button"]').click();
  }

  preencherFormulario(usuario) {
    cy.get("#id_gender1").check();
    cy.get("#password").type(usuario.senha);
    cy.get("#days").select(usuario.dia);
    cy.get("#months").select(usuario.mes);
    cy.get("#years").select(usuario.ano);
    cy.get("#first_name").type(usuario.firstName);
    cy.get("#last_name").type(usuario.lastName);
    cy.get("#company").type(usuario.company);
    cy.get("#address1").type(usuario.address);
    cy.get("#country").select(usuario.country);
    cy.get("#state").type(usuario.state);
    cy.get("#city").type(usuario.city);
    cy.get("#zipcode").type(usuario.zipcode);
    cy.get("#mobile_number").type(usuario.mobile);
  }

  clicarCriarConta() {
    cy.get('[data-qa="create-account"]').click();
  }

  validarContaCriada() {
    cy.contains("Account Created!").should("be.visible");
  }
}

export default new CadastroPage();
