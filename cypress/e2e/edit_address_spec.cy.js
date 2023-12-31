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

    it('Update contact information successfully', () => {
        const newContactInfo = {
            firstName: 'NewFirst',
            lastName: 'NewLast',
            telephone: '9876543210',
        }

        cy.visitEditAddress()
        cy.visibleEditAdressForm()
        cy.clearContactInformation()

        // Fill new contact information
        cy.get('#firstname').type(newContactInfo.firstName)
        cy.get('#lastname').type(newContactInfo.lastName)
        cy.get('#telephone').type(newContactInfo.telephone)

        // Fill remaining address details
        cy.clearAddress()
        cy.fillPersonalInformation(user.firstName, user.lastName)
        cy.get('#street_1').type(address.street)
        cy.get('#city').type(address.city)
        cy.get('#zip').type(address.zipCode)
        cy.get('#country').select(address.country)
        cy.get('#region_id').select(address.region)

        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()

        // Check if success message is shown
        cy.contains(/You saved the address./i)

        // Verify the updated contact information
        cy.contains(newContactInfo.firstName)
        cy.contains(newContactInfo.lastName)
        cy.contains(newContactInfo.telephone)
    })


})