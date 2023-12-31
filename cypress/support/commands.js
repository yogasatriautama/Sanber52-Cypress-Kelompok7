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

Cypress.Commands.add('visitEditAddress', () => {
  cy.url().should('include', '/customer/account/')
  cy.get('.box-billing-address > .box-actions > .action > span').click()
})

Cypress.Commands.add('visibleEditAdressForm', () => {
  cy.get('#firstname').should('be.visible')
  cy.get('#lastname').should('be.visible')
  cy.get('#company').should('be.visible')
  cy.get('#telephone').should('be.visible')
  cy.get('#street_1').should('be.visible')
  cy.get('#city').should('be.visible')
  cy.get('#region_id').should('be.visible')
  cy.get('#zip').should('be.visible')
  cy.get('#country').should('be.visible')
})

Cypress.Commands.add('clearContactInformation', () => {
  cy.get('#firstname').clear()
  cy.get('#lastname').clear()
  cy.get('#company').clear()
  cy.get('#telephone').clear()
})

Cypress.Commands.add('clearAddress', () => {
  cy.get('#street_1').clear()
  cy.get('#city').clear()
  cy.get('#region_id').select(0)
  cy.get('#zip').clear()
  cy.get('#country').select(0)
})