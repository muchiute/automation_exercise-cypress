import { CartLocators } from "./locators/CartLocators";

class CartPage {

  validarProdutoCarrinho(produto) {
    cy.contains(produto)
      .should("be.visible");
  }

  clicarCheckout() {
    cy.contains(CartLocators.proceedToCheckout)
      .should("be.visible")
      .click();
  }

  clicarPlaceOrder() {
    cy.contains(CartLocators.placeOrder)
      .should("be.visible")
      .click();
  }

  preencherPagamento(usuario) {
    cy.safeType(CartLocators.cardName, usuario.nomeCartao);
    cy.safeType(CartLocators.cardNumber, usuario.numeroCartao);
    cy.safeType(CartLocators.cvc, usuario.cvc);
    cy.safeType(CartLocators.expiryMonth, usuario.mesValidade);
    cy.safeType(CartLocators.expiryYear, usuario.anoValidade);
  }

  confirmarPagamento() {
    cy.safeClick(CartLocators.payButton);
  }

  validarCompraRealizada() {
    cy.contains(CartLocators.orderPlaced)
      .should("be.visible");
  }
}

export default new CartPage();