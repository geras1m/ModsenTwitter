/// <reference types="cypress" />
describe('SignUp', () => {
  beforeEach(() => {
    cy.visit('/sign-up');
  });

  const invalidUserData = {
    name: 'Te',
    phone: '123456789123',
    email: 'cypresstestgmail.com',
    password: 'invalidTestPassword',
  };

  const warningMessages = {
    name: 'The minimum line length is 3',
    email: 'Invalid email',
    phone: 'Phone number should follow the pattern +375 (29/25/44/33) 1234567',
    password: 'The password should be at least 6 symbols long and contain a digit',
  };

  it('Should show a warning message if all fields are empty', () => {
    cy.get('[data-testid=signup-button]').click();
    cy.url().should('include', '/sign-up');
  });

  it('Should show a warning message if one of the name field is not valid', () => {
    cy.get('[data-testid=signup-input-name]').type(invalidUserData.name);
    cy.get('[data-testid=signup-input-phone]').click();

    cy.get('[data-testid=signup-form]').contains(warningMessages.name);
  });

  it('Should show a warning message if one of the phone field is not valid', () => {
    cy.get('[data-testid=signup-input-phone]').type(invalidUserData.phone);
    cy.get('[data-testid=signup-input-phone]').click();

    cy.get('[data-testid=signup-form]').contains(warningMessages.phone);
  });

  it('Should show a warning message if one of the email field is not valid', () => {
    cy.get('[data-testid=signup-input-email]').type(invalidUserData.email);
    cy.get('[data-testid=signup-input-phone]').click();

    cy.get('[data-testid=signup-form]').contains('Invalid email');
  });

  it('Should show a warning message if one of the password field is not valid', () => {
    cy.get('[data-testid=login-password-input-password]').type(invalidUserData.password);
    cy.get('[data-testid=signup-input-phone]').click();

    cy.get('[data-testid=signup-form]').contains(warningMessages.password);
  });

  it('Should show a warning message if one of the confirm password field is not valid', () => {
    cy.get('[data-testid=login-password-input-сonfirm-password]').type(invalidUserData.password);
    cy.get('[data-testid=signup-input-phone]').click();

    cy.get('[data-testid=signup-form]').contains(warningMessages.password);
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
