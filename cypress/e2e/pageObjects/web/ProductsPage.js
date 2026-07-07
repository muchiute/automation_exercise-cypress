import { ProductsLocators } from "./locators/ProductsLocators";

class ProductsPage {
  acessarProdutos() {
    cy.visit("/");

    cy.contains("a", ProductsLocators.productsMenu, { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  buscarProduto(produto) {
    cy.safeType(ProductsLocators.searchInput, produto);

    cy.safeClick(ProductsLocators.searchButton);
  }

  validarProduto(produto) {
    cy.contains(produto).should("be.visible");
  }

  adicionarPrimeiroProduto() {
    cy.contains(ProductsLocators.addToCart)
      .first()
      .should("be.visible")
      .click();
  }

  visualizarCarrinho() {
    cy.contains(ProductsLocators.viewCart).should("be.visible").click();
  }
}

export default new ProductsPage();
