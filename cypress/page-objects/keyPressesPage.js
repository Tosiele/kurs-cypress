const input = '#target'
const result = '#keyPressResult'
const text = '1' //does not work on any "special" keys

class KeyPressesPage {

    pressKey() {
        cy.get(input).type(text);
        cy.get(result).should('contain','You entered: ' + text);
    }

}
export default KeyPressesPage;