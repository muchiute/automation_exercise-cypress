// Limpa o estado da aplicação antes dos testes
Cypress.Commands.add("resetState", () => {
  cy.clearCookies();
  cy.clearLocalStorage();

  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
});

// Clique seguro
Cypress.Commands.add("safeClick", (selector) => {
  cy.get(selector)
    .should("be.visible")
    .and("be.enabled")
    .click();
});

// Digitação segura
Cypress.Commands.add("safeType", (selector, value) => {
  cy.get(selector)
    .should("be.visible")
    .clear()
    .type(value);
});

// Select seguro
Cypress.Commands.add("safeSelect", (selector, value) => {
  cy.get(selector)
    .should("be.visible")
    .select(value);
});

// Upload de arquivos
Cypress.Commands.add("uploadFile", (url, formData, token) => {
  return cy.window().then((win) => {
    return new Cypress.Promise((resolve, reject) => {
      const xhr = new win.XMLHttpRequest();

      xhr.open("POST", url);
      xhr.setRequestHeader("Authorization", token);

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      };

      xhr.onerror = function () {
        reject(xhr.response);
      };

      xhr.send(formData);
    });
  });
});