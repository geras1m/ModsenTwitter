/// <reference types="cypress" />

Cypress.Commands.add('login', () => {
  return cy
    .fixture('userData')
    .then((user) => {
      cy.visit('/login');

      cy.get('[data-testid=login-email-input]').type(user.email);
      cy.get('[data-testid=login-password-input-password]').type(user.password);
      cy.get('[data-testid=login-submit-button]').click();
    })
    .wait(2000);
});

declare namespace Cypress {
  interface Chainable {
    login(): Chainable;
  }
}
