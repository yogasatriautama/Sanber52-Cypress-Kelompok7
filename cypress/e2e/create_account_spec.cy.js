// create_account_spec.cy.js

// Import Page Object
import CreateAccountPage from '../pages/createAccountPage';

// Import custom commands
import '../support/commands.js';

describe('Create Account Test', () => {
  const createAccountPage = new CreateAccountPage();

  it('should create a new account with a random email', () => {
    // Generate random email
    const uniqueSuffix = Date.now().toString();
    const randomEmail = `yoga${uniqueSuffix}@gmail.com`;

    // Get user data from fixture
    cy.fixture('user_data').then((userData) => {
      const { firstName, lastName, password } = userData.user;

      // Visit create account page
      createAccountPage.visit();

      // Use Page Object to fill personal information
      createAccountPage.fillPersonalInformation(firstName, lastName);

      // Use Page Object to fill sign-in information with a random email
      createAccountPage.fillSignInInformation(randomEmail, password);

      // Use Page Object to submit the form
      createAccountPage.submitForm();

      // Use Page Object to assert successful registration
      createAccountPage.getSuccessMessage().should('be.visible');
    });
  });

  it('should display an error when using the same email for registration', () => {
    // Get user data from fixture
    cy.fixture('user_data').then((userData) => {
      const { firstName, lastName, email, password } = userData.user;

      // Visit create account page
      createAccountPage.visit();

      // Use Page Object to fill personal information
      createAccountPage.fillPersonalInformation(firstName, lastName);

      // Use Page Object to fill sign-in information with the same email
      createAccountPage.fillSignInInformation(email, password);

      // Use Page Object to submit the form
      createAccountPage.submitForm();
    });
  });
});
