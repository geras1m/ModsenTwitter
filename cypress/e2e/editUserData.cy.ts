/// <reference types="cypress" />
describe('User data', () => {
  beforeEach(() => {
    cy.login();
  });

  const newUserData = {
    name: 'NewName',
    surname: 'NewSurname',
  };

  it('Should contain the user data on the profile page', () => {
    cy.fixture('userData').then((user) => {
      cy.contains(user.name).should('exist');
      cy.contains(user.email).should('exist');
    });
  });

  it('Should edit profile name and surname', () => {
    cy.get('[data-testid=edit-button]').click();

    cy.get('[data-testid=edit-form]').should('be.visible');

    cy.get('[data-testid=profile-input-name]').type(newUserData.name);
    cy.get('[data-testid=profile-input-surname]').type(newUserData.surname);

    cy.get('[data-testid=profile-edit-button]').click();

    cy.contains(newUserData.name).should('exist');
    cy.contains(newUserData.surname).should('exist');
  });
});
