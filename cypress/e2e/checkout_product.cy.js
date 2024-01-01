import checkoutProcess from "../support/pageObject/checkoutProcess";
import randomInput from "../support/pageObject/randomInput";

describe('Checkout on Magento', () => {
    beforeEach(() => {
        //Access https://magento.softwaretestingboard.com/
        cy.visit('/') 
    })


    // Case I : Checkout (Harus sudah menambahkan product kedalam cart)
    it('Checkout Product From Cart', () => { 
        checkoutProcess.SignIn()

        //read validAkun.json from file fixture
        cy.readFile('cypress/fixtures/validAkun.json').then((akun) => {
        checkoutProcess.InputEmail(akun.email)
        checkoutProcess.InputPass(akun.password)
        checkoutProcess.BtnLogin()
        cy.wait(6000)
        })

        checkoutProcess.BtnChart()
        checkoutProcess.BtnCheckout1()
        cy.wait(6000)

        const company = randomInput.generateRandomString(8);
        const add1 = randomInput.generateRandomString(8);
        const add2 = randomInput.generateRandomString(8);
        const add3 = randomInput.generateRandomString(8);
        const city = randomInput.generateRandomString(8);
        const Post = randomInput.generateRandomInt(6);
        const Phone = randomInput.generateRandomInt(12);

        checkoutProcess.Fill_Comp(company)
        checkoutProcess.Fill_Add1(add1)
        checkoutProcess.Fill_Add2(add2)
        checkoutProcess.Fill_Add3(add3)
        checkoutProcess.Fill_City(city)
        checkoutProcess.Fill_Reg1('London')
        checkoutProcess.Fill_Post(Post)
        checkoutProcess.Fill_Reg2('United Kingdom')
        checkoutProcess.Fill_Phone(Phone)
        checkoutProcess.Radio_Btn1()
        checkoutProcess.Next_Btn()
        cy.wait(6000)
        checkoutProcess.Pay_Btn()

        cy.contains('Thank you for your purchase!').should('be.visible')
    })

    //Case II
    it('Have checked out before', () => { 
        checkoutProcess.SignIn()

        //read validAkun.json from file fixture
        cy.readFile('cypress/fixtures/validAkun.json').then((akun) => {
            checkoutProcess.InputEmail(akun.email)
            checkoutProcess.InputPass(akun.password)
            checkoutProcess.BtnLogin()
            cy.wait(6000)
            })

        checkoutProcess.BtnChart()
        checkoutProcess.BtnCheckout1()
        cy.wait(10000)
        checkoutProcess.Radio_Btn1()
        checkoutProcess.Next_Btn()
        cy.wait(10000)
        checkoutProcess.Pay_Btn()
        
        cy.contains('Thank you for your purchase!').should('be.visible')
    })
})