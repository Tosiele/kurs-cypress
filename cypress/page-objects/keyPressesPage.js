const input = '#target'
const result = '#keyPressResult'
const text = '1'

class KeyPressesPage {

    pressKey() {
        cy.get(input).type(text);
        cy.get(result).should('contain','You entered: ' + text);
    }

}
export default KeyPressesPage;