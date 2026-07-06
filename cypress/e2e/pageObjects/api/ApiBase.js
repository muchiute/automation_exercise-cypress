import ApiLogger from "./utils/ApiLogger";

class ApiBase {
  request(method, url, body = null, headers = {}) {
    const request = { method, url, body, headers };

    ApiLogger.logRequest(request);

    return cy.request({
      method,
      url,
      body,
      headers,
      failOnStatusCode: false,
    }).then((response) => {
      ApiLogger.logResponse(response);
      return response;
    });
  }
}

export default new ApiBase();