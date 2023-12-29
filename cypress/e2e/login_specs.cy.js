// cypress/e2e/login_specs.cy.js

describe('Login Test', () => {
  beforeEach(() => {
    cy.fixture('user_data').as('userData');
  });

  it('should log in with valid credentials', function () {
    const { email, password } = this.userData.user;
  
    // Pass an object with email and password properties
    cy.login({ email, password });
  
    cy.url().should('include', '/customer/account/');
  });

  it.only('should display an error with invalid credentials', function () {
    const user = this.userData.user;
    const invalidEmail = 'invalid@example.com';
    const invalidPassword = 'InvalidPassword';
  
    // Menetapkan email dan password yang tidak valid
    user.email = invalidEmail;
    user.password = invalidPassword;
  
    cy.login(user);
    cy.get('.message-error').should('be.visible', { timeout: 15000 });
  });
  
  it('should navigate to the forgot password page', () => {
    cy.visit('/customer/account/login/');
    cy.contains('Forgot Your Password?').click();
    cy.url().should('include', '/customer/account/forgotpassword/');
  });
});
