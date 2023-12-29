// cypress/pages/loginPage.js

class LoginPage {
    visit() {
      cy.visit('/customer/account/login/');
    }
  
    fillLoginForm(email, password) {
      cy.get('input[name="login[username]"]').type(email);
      cy.get('input[name="login[password]"]').type(password);
    }
  
    submitLoginForm() {
      cy.get('button.login.primary').click();
    }
  
    getErrorMessage() {
      return cy.get('.message-error');
    }
  
    navigateToForgotPasswordPage() {
      cy.contains('Forgot Your Password?').click();
    }
  }
  
  export default LoginPage;
  