import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import LoginPage from "../../pageObjects/web/LoginPage";
import ProductsPage from "../../pageObjects/web/ProductsPage";

let usuario;

before(() => {
  cy.fixture("usuario").then((data) => {
    usuario = data;
  });
});

Given("que estou logado no sistema", () => {
  LoginPage.acessarLogin();
  LoginPage.realizarLogin(usuario.email, usuario.senha);
  LoginPage.validarLogin();
});

When("acesso a página de produtos e busco pelo produto", () => {
  ProductsPage.acessarProdutos();
  ProductsPage.buscarProduto(usuario.produto);
});

Then("o produto deve aparecer na busca", () => {
  ProductsPage.validarProduto(usuario.produto);
});