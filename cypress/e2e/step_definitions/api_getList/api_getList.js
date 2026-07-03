import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import TrelloApi from "../../pageObjects/api/TrelloApi";

Given("que possuo acesso à API do Trello", () => {});

When("eu envio um GET para a API", () => {
  TrelloApi.getAction().as("response");
});

Then("o status code deve ser 200 e exibir o nome da lista", () => {
  cy.get("@response").then((response) => {
    expect(response.status).to.eq(200);
    const listName = response.body.data.list.name;
    cy.log(`Nome da lista: ${listName}`);
    console.log("Nome da lista:", listName);
    expect(listName).to.not.be.empty;
  });
});
