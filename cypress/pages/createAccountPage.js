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
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="password"]').type(password);
      cy.get('input[name="password_confirmation"]').type(password);
    }
  
    submitForm() {
      cy.get('button.action.submit.primary').click();
    }
  
    getSuccessMessage() {
      return cy.contains('Thank you for registering with Main Website Store.');
    }
  
    getErrorMessages() {
      return cy.get('.error-message');
    }
  }
  
  export default CreateAccountPage;
  