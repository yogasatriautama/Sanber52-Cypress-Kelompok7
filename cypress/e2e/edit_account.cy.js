import { user } from '../fixtures/user_data.json'

describe('Edit Account Information', () => {
    beforeEach(() => {
        cy.login(user)
    })

    it('Required error message must shown', () => {
        cy.visitEditAccount()
        cy.clearPersonalInformation()
        cy.notVisibleChangeEmail()
        cy.notVisibleChangePassword()
        cy.visibleChangeEmail()
        cy.get('#email').clear()
        cy.visibleChangePassword()
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains(/This is a required field./i)
    })

    it('Invalid email error message must shown', () => {
        cy.visitEditAccount()
        cy.notVisibleChangeEmail()
        cy.visibleChangeEmail()
        cy.get('#email').clear()
        cy.get('#email').type('invalid.com')
        cy.get('#current-password').type(user.password)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains(/Please enter a valid email address./i)
        // cy.contains(/You saved the account information./i)
    });

    it('Invalid password error message must shown', () => {
        cy.visitEditAccount()
        cy.notVisibleChangeEmail()
        cy.visibleChangeEmail()
        cy.get('#email').clear()
        cy.get('#email').type(user.email)
        cy.get('#current-password').type(user.password + '101010')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains(/The password doesn't match this account. Verify the password and try again./i)
    });

    it('Minimum length password error message must shown', () => {
        cy.visitEditAccount()
        cy.notVisibleChangePassword()
        cy.visibleChangePassword()
        cy.get('#current-password').type(user.password)
        cy.get('#password').type('Pass')
        cy.get('#password-confirmation').type('Pass')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains(/Minimum length of this field must be equal or greater than 8 symbols./i)
    });

    it('Minimum different classes password error message must shown', () => {
        cy.visitEditAccount()
        cy.notVisibleChangePassword()
        cy.visibleChangePassword()
        cy.get('#current-password').type(user.password)
        cy.get('#password').type('Password')
        cy.get('#password-confirmation').type('Password')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains(/Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters./i)
    });

    it('Different confirm password error message must shown', () => {
        cy.visitEditAccount()
        cy.notVisibleChangePassword()
        cy.visibleChangePassword()
        cy.get('#current-password').type(user.password)
        cy.get('#password').type('Password123')
        cy.get('#password-confirmation').type('Password')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains(/Please enter the same value again./i)
    });

    it('Succesfully edit account', () => {
        cy.visitEditAccount()
        cy.notVisibleChangeEmail()
        cy.notVisibleChangePassword()
        cy.visibleChangeEmail()
        cy.visibleChangePassword()
        cy.clearPersonalInformation()
        cy.get('input[name="firstname"]').type(user.firstName)
        cy.get('input[name="lastname"]').type(user.lastName)
        cy.get('#email').clear()
        cy.get('#email').type(user.email)
        cy.get('#current-password').type(user.password)
        cy.get('#password').type(user.password)
        cy.get('#password-confirmation').type(user.password)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains(/You saved the account information./i)
    });
})