class CartPage {
  validarProdutoCarrinho(produto) {
    cy.contains(produto).should("be.visible");
  }

  clicarCheckout() {
    cy.contains("Proceed To Checkout").click();
  }

  clicarPlaceOrder() {
    cy.contains("Place Order").click();
  }

  preencherPagamento(usuario) {
    cy.get('[data-qa="name-on-card"]').type(usuario.nomeCartao);
    cy.get('[data-qa="card-number"]').type(usuario.numeroCartao);
    cy.get('[data-qa="cvc"]').type(usuario.cvc);
    cy.get('[data-qa="expiry-month"]').type(usuario.mesValidade);
    cy.get('[data-qa="expiry-year"]').type(usuario.anoValidade);
  }

  confirmarPagamento() {
    cy.get('[data-qa="pay-button"]').click();
  }

  validarCompraRealizada() {
    cy.contains("Order Placed!").should("be.visible");
  }
}

export default new CartPage();
