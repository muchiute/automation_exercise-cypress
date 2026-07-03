import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ProductsPage from "../../pageObjects/web/ProductsPage";
import CartPage from "../../pageObjects/web/CartPage";

Given("que acesso os produtos", () => {
  ProductsPage.acessarProdutos();
});

When("adiciono o produto ao carrinho", function () {
  cy.fixture("usuario").then((usuario) => {
    ProductsPage.buscarProduto(usuario.produto);
    ProductsPage.adicionarPrimeiroProduto();
    ProductsPage.visualizarCarrinho();
  });
});

Then("o produto deve estar no carrinho", function () {
  cy.fixture("usuario").then((usuario) => {
    CartPage.validarProdutoCarrinho(usuario.produto);
  });
});