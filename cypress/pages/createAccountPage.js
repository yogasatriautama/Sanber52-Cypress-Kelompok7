// cypress/pages/createAccountPage.js

class CreateAccountPage {
    visit() {
      cy.visit('/customer/account/create/');
    }
  
    fillPersonalInformation(firstName, lastName) {
      cy.get('input[name="firstname"]').type(firstName);
      cy.get('input[name="lastname"]').type(lastName);
    }
  
    fillSignInInformation(email, password) {
      cy.get('input[name="email"]').as('emailInput').type(email);
      cy.get('input[name="password"]').as('passwordInput').type(password);
      cy.get('input[name="password_confirmation"]').as('confirmPasswordInput').type(password);
    }
  
    submitForm() {
      cy.get('button.action.submit.primary').click();
    }
  
    getSuccessMessage() {
      return cy.contains('Thank you for registering with Main Website Store.');
    }
  
    getErrorMessages2() {
      return cy.get('.message-error > div');
    }

    getErrorMessages() {
      return cy.get('.error-message');
    }

    getPasswordError() {
      return cy.get('#password-strength-meter');
    }

    getEmailError() {
      return cy.get('#email_address-error');
    }
  }
  
  export default CreateAccountPage;
  