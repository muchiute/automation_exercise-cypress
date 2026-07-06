import ApiBase from "./ApiBase";

class TrelloApi {
  getAction() {
    return ApiBase.request("GET", Cypress.env("apiUrl"));
  }
}

export default new TrelloApi();