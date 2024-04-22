/// <reference types="cypress" />
describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Should login the user and redirect to the profile page', () => {
    cy.fixture('userData').then((user) => {
      cy.get('[data-testid=login-email-input]').type(user.email);
      cy.get('[data-testid=login-password-input-password]').type(user.password);
      cy.get('[data-testid=login-submit-button]').click();

      cy.url().should('include', '/profile');
    });
  });

  it('Should show a warning toast if the passwords do not match', () => {
    cy.fixture('userData').then((user) => {
      cy.get('[data-testid=login-email-input]').type(user.email);
      cy.get('[data-testid=login-password-input-password]').type(user.password + 1);
      cy.get('[data-testid=login-submit-button]').click();

      cy.contains('Unexpected error').should('exist');
    });
  });

  it('Should show a warning toast if the emails do not match', () => {
    cy.fixture('userData').then((user) => {
      cy.get('[data-testid=login-email-input]').type(user.email + 1);
      cy.get('[data-testid=login-password-input-password]').type(user.password);
      cy.get('[data-testid=login-submit-button]').click();

      cy.contains('Unexpected error').should('exist');
    });
  });
});
