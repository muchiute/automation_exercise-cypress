class TrelloApi {
  getAction() {
    return cy.request({
      method: "GET",
      url: Cypress.env("apiUrl"),
    });
  }
}
export default new TrelloApi();
