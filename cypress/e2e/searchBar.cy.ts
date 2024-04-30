/// <reference types="cypress" />
describe('Search bar', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Should search for the user by entering the input', () => {
    cy.visit('/');

    cy.get('[data-testid=users-search-input]').type('name');
    cy.get('[data-testid=users-search-result]', { timeout: 1000 }).should('be.visible');

    cy.get('[data-testid=users-search-result]').click();
    cy.url().should('include', '/users-search');

    cy.get('[data-testid=tweets-block]').contains('Hi everybody!');
  });

  it('Should search for the tweet by entering the input', () => {
    cy.visit('/profile');

    cy.get('[data-testid=tweets-search-input]').type('everybody');
    cy.get('[data-testid=tweets-search-result]', { timeout: 1000 }).should('be.visible');

    cy.get('[data-testid=tweets-search-result]').click();
    cy.url().should('include', '/tweets-search');

    cy.get('[data-testid=tweet-post]').contains('Hi everybody!');
  });

  it('Should show the warning message if the search without results', () => {
    cy.visit('/profile');

    cy.get('[data-testid=tweets-search-input]').type('Not found input');

    cy.get('[data-testid=tweets-suggestion-block]').contains(
      'The tweet was not found for your query',
    );
  });
});
