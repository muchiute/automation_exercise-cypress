class ProductsPage {

  acessarProdutos() {
    cy.visit("/");
    cy.contains("a", "Products", { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  buscarProduto(produto) {
    cy.get("#search_product")
      .should("be.visible")
      .clear()
      .type(produto);

    cy.get("#submit_search")
      .should("be.visible")
      .click();
  }

  validarProduto(produto) {
    cy.contains(produto)
      .should("be.visible");
  }

  adicionarPrimeiroProduto() {
    cy.contains("Add to cart")
      .first()
      .should("be.visible")
      .click();
  }

  visualizarCarrinho() {
    cy.contains("View Cart")
      .should("be.visible")
      .click();
  }
}

export default new ProductsPage();