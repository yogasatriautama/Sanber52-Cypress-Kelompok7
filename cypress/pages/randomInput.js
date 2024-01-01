class randomInput {
    generateRandomString() {
        const characters = Math.random().toString(36).substring(2, 10);
        const randomString = characters;

        return randomString;
      }

    generateRandomInt(length) {
        const integer = '1234567890';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += integer.charAt(Math.floor(Math.random() * integer.length));
        }
        cy.log(`Generated random integer: ${result}`);
        return result;
        }
}

export default new randomInput()