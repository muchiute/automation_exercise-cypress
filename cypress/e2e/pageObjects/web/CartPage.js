import { CartLocators } from "./locators/CartLocators";

class CartPage {


  validarProdutoCarrinho(produto) {
    cy.get(CartLocators.produtoNome)
      .should("contain.text", produto)
      .and("be.visible");
  }


  validarProdutoPreco(preco) {
    cy.get(CartLocators.produtoPreco)
      .should("contain.text", preco);
  }


  validarQuantidade(quantidade) {
    cy.get(CartLocators.quantidade)
      .should("contain.text", quantidade);
  }


  validarSubtotal(subtotal) {
    cy.get(CartLocators.subtotal)
      .should("contain.text", subtotal);
  }


  clicarCheckout() {

    cy.contains(CartLocators.proceedToCheckout)
      .should("be.visible")
      .click();

    // valida navegação checkout
    cy.url()
      .should("include", "/checkout");

    cy.contains("Address Details")
      .should("be.visible");
  }


  clicarPlaceOrder() {

    cy.contains(CartLocators.placeOrder)
      .should("be.visible")
      .click();

    cy.url()
      .should("include", "/payment");
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

    cy.url()
      .should("include", "/payment_done");

    cy.contains(CartLocators.orderPlaced)
      .should("be.visible");
  }
}

export default new CartPage();