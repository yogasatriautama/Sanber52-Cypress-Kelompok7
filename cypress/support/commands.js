Cypress.Commands.add('fillPersonalInformation', (firstName, lastName) => {
    cy.get('input[name="firstname"]').type(firstName);
    cy.get('input[name="lastname"]').type(lastName);
  });

  Cypress.Commands.add('login', (user) => {
    cy.visit('/customer/account/login/');
    cy.get('input[name="login[username]"]').type(user.email);
    cy.get('input[name="login[password]"]').type(user.password);
    cy.get('button.login.primary').click();
  });
  
  Cypress.Commands.add('logout', () => {
    cy.get('.logout-link').click();
  });
  
  Cypress.Commands.add('generateRandomEmail', () => {
    const uniqueSuffix = Date.now().toString();
    return `user${uniqueSuffix}@example.com`;
  });
  
  