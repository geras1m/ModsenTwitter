/// <reference types="cypress" />
describe('User data', () => {
  beforeEach(() => {
    cy.login();
  });

  const newUserData = {
    name: 'NewName',
    surname: 'NewSurname',
  };

  const invalidUserData = {
    name: 'Te',
    phone: '123456789123',
    email: 'cypresstestgmail.com',
    password: 'invalidTestPassword',
    telegram: 'telegram',
  };

  const warningMessages = {
    name: 'The minimum line length is 3',
    email: 'Invalid email',
    phone: 'Phone number should follow the pattern +375 (29/25/44/33) 1234567',
    password: 'The password should be at least 6 symbols long and contain a digit',
    telegram: 'Telegram nickname should follow the pattern: @nick',
  };

  it('Should contain the user data on the profile page', () => {
    cy.fixture('userData').then((user) => {
      cy.contains(user.name).should('exist');
      cy.contains(user.email).should('exist');
    });
  });

  it('Should show a warning message if one of the name field is not valid', () => {
    cy.get('[data-testid=edit-button]').click();
    cy.get('[data-testid=profile-input-name]').type(invalidUserData.name);
    cy.get('[data-testid=profile-input-surname]').click();

    cy.get('[data-testid=edit-form]').contains(warningMessages.name);
  });

  it('Should show a warning message if one of the surname field is not valid', () => {
    cy.get('[data-testid=edit-button]').click();
    cy.get('[data-testid=profile-input-surname]').type(invalidUserData.name);
    cy.get('[data-testid=profile-input-name]').click();

    cy.get('[data-testid=edit-form]').contains(warningMessages.name);
  });

  it('Should show a warning message if one of the telegram field is not valid', () => {
    cy.get('[data-testid=edit-button]').click();
    cy.get('[data-testid=profile-input-telegram]').type(invalidUserData.telegram);
    cy.get('[data-testid=profile-input-name]').click();

    cy.get('[data-testid=edit-form]').contains(warningMessages.telegram);
  });

  it('Should show a warning message if one of the сurrent password field is not valid', () => {
    cy.get('[data-testid=edit-button]').click();
    cy.get('[data-testid=login-password-input-сurrent-password]').type(invalidUserData.password);
    cy.get('[data-testid=profile-input-name]').click();

    cy.get('[data-testid=edit-form]').contains(warningMessages.password);
  });

  it('Should show a warning message if one of the new password field is not valid', () => {
    cy.get('[data-testid=edit-button]').click();
    cy.get('[data-testid=login-password-input-new-password]').type(invalidUserData.password);
    cy.get('[data-testid=profile-input-name]').click();

    cy.get('[data-testid=edit-form]').contains(warningMessages.password);
  });

  it('Should edit profile name and surname', () => {
    cy.get('[data-testid=edit-button]').click();

    cy.get('[data-testid=edit-form]').should('be.visible');

    cy.get('[data-testid=profile-input-name]').type(newUserData.name);
    cy.get('[data-testid=profile-input-surname]').type(newUserData.surname);

    cy.get('[data-testid=profile-edit-button]').click();

    cy.contains(newUserData.name).should('exist');
    cy.contains(newUserData.surname).should('exist');
    cy.contains('Success!').should('exist');
  });
});
