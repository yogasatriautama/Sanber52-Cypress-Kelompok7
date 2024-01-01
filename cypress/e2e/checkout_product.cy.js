import { user } from '../fixtures/user_data.json';

describe('Checkout on Magento', () => {
    beforeEach(() => {
        cy.login(user);
    });

    it.only('Checkout Product From Cart', () => {

        // Klik tombol tampilkan keranjang
        cy.get('.showcart').click();

        // Tunggu 5 detik sebelum melanjutkan ke langkah berikutnya
        cy.wait(5000);

        // Klik tombol checkout
        cy.get('#top-cart-btn-checkout').click({ force: true });
        cy.get('#top-cart-btn-checkout').click({ force: true });
    });

});
