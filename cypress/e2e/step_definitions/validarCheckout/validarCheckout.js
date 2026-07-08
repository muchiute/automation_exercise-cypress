import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ProductsPage from "../../pageObjects/web/ProductsPage";
import CartPage from "../../pageObjects/web/CartPage";
import LoginPage from "../../pageObjects/web/LoginPage";

Given("que estou logado no sistema", function () {
  cy.fixture("usuario").then((usuario) => {
    LoginPage.acessarLogin();
    LoginPage.realizarLogin(usuario.email, usuario.senha);
  });
});

When("adiciono produto ao carrinho e sigo para checkout", function () {
  cy.fixture("usuario").then((usuario) => {
    ProductsPage.acessarProdutos();
    ProductsPage.buscarProduto(usuario.produto);
    ProductsPage.adicionarPrimeiroProduto();
    ProductsPage.visualizarCarrinho();
    CartPage.clicarCheckout();
  });
});

Then("o produto deve aparecer no checkout com dados corretos", function () {
  cy.fixture("usuario").then((usuario) => {
    CartPage.validarProdutoCarrinho(usuario.produto);
    CartPage.validarProdutoPreco(usuario.precoProduto);
    CartPage.validarQuantidade(usuario.quantidade);
    CartPage.validarSubtotal(usuario.subtotal);
  });
});