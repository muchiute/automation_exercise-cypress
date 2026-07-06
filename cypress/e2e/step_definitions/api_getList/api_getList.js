import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import TrelloApi from "../../pageObjects/api/TrelloApi";
import TrelloAssertions from "../../pageObjects/api/TrelloAssertions";

Given("que possuo acesso à API do Trello", () => {});

When("eu envio um GET para a API", () => {
  TrelloApi.getAction().as("response");
});

Then("o status code deve ser 200 e exibir o nome da lista", () => {
  cy.get("@response").then((response) => {
    TrelloAssertions.validateStatus(response, 200);

    const listName = TrelloAssertions.validateListName(response);

    cy.log(`Nome da lista: ${listName}`);
  });
});