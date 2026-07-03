import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import LoginPage from "../../pageObjects/web/LoginPage";
import ProductsPage from "../../pageObjects/web/ProductsPage";
import CartPage from "../../pageObjects/web/CartPage";
import UsuarioFactory from "../../factories/UsuarioFactory";

let dadosPagamento;

before(function () {
  cy.fixture("usuario").as("usuario");
  dadosPagamento = UsuarioFactory.criarUsuario();
});

Given("que realizo um login válido", function () {
  LoginPage.acessarLogin();
  LoginPage.realizarLogin(this.usuario.email, this.usuario.senha);
});

When("eu busco um produto", function () {
  ProductsPage.acessarProdutos();
  ProductsPage.buscarProduto(this.usuario.produto);
  ProductsPage.validarProduto(this.usuario.produto);
});

When("adiciono o produto ao carrinho", function () {
  ProductsPage.adicionarPrimeiroProduto();
  ProductsPage.visualizarCarrinho();
});

Then("o produto deve estar no carrinho e a compra é finalizada", function () {
  CartPage.validarProdutoCarrinho(this.usuario.produto);
  CartPage.clicarCheckout();
  CartPage.clicarPlaceOrder();
  CartPage.preencherPagamento(dadosPagamento);
  CartPage.confirmarPagamento();
  CartPage.validarCompraRealizada();
});
