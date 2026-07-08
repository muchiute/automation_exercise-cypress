import { ProductsLocators } from "./locators/ProductsLocators";

class ProductsPage {

  acessarProdutos() {
    cy.visit("/");

    cy.contains("a", ProductsLocators.productsMenu, { timeout: 10000 })
      .should("be.visible")
      .click();

    // valida navegação para produtos
    cy.url()
      .should("include", "/products");

    cy.contains("All Products")
      .should("be.visible");
  }


  buscarProduto(produto) {
    cy.safeType(ProductsLocators.searchInput, produto);

    cy.safeClick(ProductsLocators.searchButton);

    // valida resultado da busca
    cy.url()
      .should("include", "/products");

    cy.contains(produto)
      .should("be.visible");
  }


  validarProduto(produto) {
    cy.contains(produto)
      .should("be.visible");
  }


  adicionarPrimeiroProduto() {
    cy.contains(ProductsLocators.addToCart)
      .first()
      .should("be.visible")
      .click();
  }


  visualizarCarrinho() {
    cy.contains(ProductsLocators.viewCart)
      .should("be.visible")
      .click();

    // valida navegação para carrinho
    cy.url()
      .should("include", "/view_cart");
  }
}

export default new ProductsPage();