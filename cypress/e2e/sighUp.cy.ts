/// <reference types="cypress" />
describe('SignUp', () => {
  beforeEach(() => {
    cy.visit('/sign-up');
  });

  const userData = {
    name: 'Test',
    phone: '375291234567',
    email: 'cypresstest@gmail.com',
    incorrectEmail: 'cypresstestgmail.com',
    password: 'testPassword111',
  };

  it('Should show a warning message if one of the required fields is not valid', () => {
    cy.get('[data-testid=signup-input-name]').type(userData.name);
    cy.get('[data-testid=signup-input-phone]').type(userData.phone);
    cy.get('[data-testid=signup-input-email]').type(userData.incorrectEmail);
    cy.get('[data-testid=login-password-input-password]').type(userData.password);
    cy.get('[data-testid=login-password-input-сonfirm-password]').type(userData.password);
    cy.get('[data-testid=signup-select-year]').select('2000');
    cy.get('[data-testid=signup-select-month]').select('April');
    cy.get('[data-testid=signup-select-day]').select('12');
    cy.get('[data-testid=signup-button]').click();

    cy.get('[data-testid=signup-error-email]').contains('Invalid email');
  });

  it('Should show a warning toast if a user with the same email exists', () => {
    cy.fixture('userData').then((user) => {
      cy.get('[data-testid=signup-input-name]').type(user.name);
      cy.get('[data-testid=signup-input-phone]').type(user.phone);
      cy.get('[data-testid=signup-input-email]').type(user.email);
      cy.get('[data-testid=login-password-input-password]').type(user.password);
      cy.get('[data-testid=login-password-input-сonfirm-password]').type(user.password);
      cy.get('[data-testid=signup-select-year]').select('2000');
      cy.get('[data-testid=signup-select-month]').select('April');
      cy.get('[data-testid=signup-select-day]').select('12');
      cy.get('[data-testid=signup-button]').click();

      cy.get('[data-testid=toast]')
        .contains('The user with this email already exists')
        .should('exist');
    });
  });

  it('Should show a warning toast if the passwords do not match', () => {
    cy.fixture('userData').then((user) => {
      cy.get('[data-testid=signup-input-name]').type(user.name);
      cy.get('[data-testid=signup-input-phone]').type(user.phone);
      cy.get('[data-testid=signup-input-email]').type(user.email);
      cy.get('[data-testid=login-password-input-password]').type(user.password + 1);
      cy.get('[data-testid=login-password-input-сonfirm-password]').type(user.password);
      cy.get('[data-testid=signup-select-year]').select('2000');
      cy.get('[data-testid=signup-select-month]').select('April');
      cy.get('[data-testid=signup-select-day]').select('12');
      cy.get('[data-testid=signup-button]').click();

      cy.contains('Password and Confirm password fields must match!').should('exist');
    });
  });
});
