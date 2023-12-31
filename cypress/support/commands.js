Cypress.Commands.add('fillPersonalInformation', (firstName, lastName) => {
  cy.get('input[name="firstname"]').type(firstName);
  cy.get('input[name="lastname"]').type(lastName);
});

Cypress.Commands.add('clearPersonalInformation', () => {
  cy.get('input[name="firstname"]').clear();
  cy.get('input[name="lastname"]').clear();
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

Cypress.Commands.add('visitEditAccount', () => {
  cy.url().should('include', '/customer/account/')
  cy.visit('/customer/account/edit')
})

Cypress.Commands.add('notVisibleChangeEmail', () => {
  cy.get('#change-email').should('not.be.selected')
  cy.get('#email').should('not.be.visible')
  cy.get('#current-password').should('not.be.visible')
});

Cypress.Commands.add('notVisibleChangePassword', () => {
  cy.get('#change-password').should('not.be.selected')
  cy.get('#current-password').should('not.be.visible')
  cy.get('#password').should('not.be.visible')
  cy.get('#password-confirmation').should('not.be.visible')
});

Cypress.Commands.add('visibleChangeEmail', () => {
  cy.get('#change-email').click()
  cy.get('#email').should('be.visible')
  cy.get('#current-password').should('be.visible')
});

Cypress.Commands.add('visibleChangePassword', () => {
  cy.get('#change-password').click()
  cy.get('#current-password').should('be.visible')
  cy.get('#password').should('be.visible')
  cy.get('#password-confirmation').should('be.visible')
});
