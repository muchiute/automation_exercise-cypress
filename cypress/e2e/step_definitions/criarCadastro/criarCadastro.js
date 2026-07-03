import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import CadastroPage from "../../pageObjects/web/cadastroPage";
import UsuarioFactory from "../../factories/UsuarioFactory";

let usuario;

Given("que acesso a tela de cadastro", () => {
  usuario = UsuarioFactory.criarUsuario();
  CadastroPage.acessarSite();
  CadastroPage.clicarSignupLogin();
});

When("informo os dados do novo usuário", () => {
  CadastroPage.preencherNome(usuario.nome);
  CadastroPage.preencherEmail(usuario.email);
  CadastroPage.clicarSignup();
  CadastroPage.preencherFormulario(usuario);
  CadastroPage.clicarCriarConta();
});

Then("o usuário é cadastrado com sucesso", () => {
  CadastroPage.validarContaCriada();
});
