import { user } from '../fixtures/user_data.json'
import { address } from '../fixtures/user_data.json'

describe('Edit Address', () => {
    beforeEach(() => {
        cy.login(user)
    })

    it('Required error message must shown', () => {
        cy.visitEditAddress()
        cy.visibleEditAdressForm()
        cy.clearContactInformation()
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains(/This is a required field./i)
    })

    it('Select state error message must shown', () => {
        cy.visitEditAddress()
        cy.visibleEditAdressForm()
        cy.clearContactInformation()
        cy.clearAddress()
        cy.fillPersonalInformation(user.firstName, user.lastName)
        cy.get('#telephone').type(user.telephone)
        cy.get('#street_1').type(address.street)
        cy.get('#city').type(address.city)
        cy.get('#zip').type(address.zipCode)
        cy.get('#country').select(address.country)
        cy.get('#region_id').select(0)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains(/Please select an option./i)
    });

    it('Zip code warning message must shown', () => {
        cy.visitEditAddress()
        cy.visibleEditAdressForm()
        cy.clearContactInformation()
        cy.clearAddress()
        cy.fillPersonalInformation(user.firstName, user.lastName)
        cy.get('#telephone').type(user.telephone)
        cy.get('#street_1').type(address.street)
        cy.get('#city').type(address.city)
        cy.get('#zip').type('kkkkk')
        cy.get('#country').select(address.country)
        cy.get('#region_id').select(address.region)
        cy.contains("Provided Zip/Postal Code seems to be invalid.")
    });

    it('Succesfully edit address', () => {
        cy.visitEditAddress()
        cy.visibleEditAdressForm()
        cy.clearContactInformation()
        cy.clearAddress()
        cy.fillPersonalInformation(user.firstName, user.lastName)
        cy.get('#telephone').type(user.telephone)
        cy.get('#street_1').type(address.street)
        cy.get('#city').type(address.city)
        cy.get('#zip').type(address.zipCode)
        cy.get('#country').select(address.country)
        cy.get('#region_id').select(address.region)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.contains(/You saved the address./i)
    });
})