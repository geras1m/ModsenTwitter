/// <reference types="cypress" />
describe('New tweet', () => {
  beforeEach(() => {
    cy.login();
  });

  const tweetText = 'The text for test tweet!';

  it('Should create a new tweet with a picture', () => {
    cy.get('[data-testid=tweet-image-input]').selectFile('cypress/fixtures/test.jpg', {
      force: true,
    });

    cy.get('[data-testid=tweet-textarea-input]').type(tweetText);
    cy.get('[data-testid=tweet-create-button]').click();

    cy.wait(2000);
  });

  it('Should add a like to tweet', () => {
    cy.get('[data-testid=active-like-false]').eq(0).click();

    cy.get('[data-testid=active-like-true]').eq(0).should('exist');

    cy.get('[data-testid=active-like-true]').eq(0).click();

    cy.get('[data-testid=active-like-false]').eq(0).should('exist');
  });

  it('Should remove a tweet', () => {
    cy.get('[data-testid=remove-tweet-menu-button]').eq(0).click();

    cy.get('[data-testid=remove-tweet-button]').click();

    cy.get('[data-testid=remove-confirm-tweet-remove-button]').click();
  });
});
