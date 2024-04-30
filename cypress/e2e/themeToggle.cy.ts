/// <reference types="cypress" />
describe('Theme toggle', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/');
  });

  // beforeEach(() => );

  it('Should be visible the toggle', () => {
    cy.get('[data-testid=toggle]').should('be.visible');
    cy.get('[data-testid=toggle-element]').should('be.visible');
  });

  it('should the theme changes by clicking the toggle', () => {
    cy.get('body').as('body');

    cy.get('@body').should('have.css', 'background-color', 'rgb(255, 255, 255)');

    cy.get('[data-testid=toggle]').first().click();

    cy.get('@body').should('have.css', 'background-color', 'rgb(20, 29, 38)');

    cy.get('[data-testid=toggle]').first().click();

    cy.get('@body').should('have.css', 'background-color', 'rgb(255, 255, 255)');
  });
});
