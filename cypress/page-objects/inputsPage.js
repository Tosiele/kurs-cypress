const input = 'input[type="number"]';

class InputPage{

    typeNumberToField(){
        cy.get(input).clear();
        cy.get(input).type('123').should('have.value', '123')
    }

    typeLetterToField(){
        cy.get(input).clear();
        cy.get(input).type('abc').should('not.have.value', 'abc')
    }
}
export default InputPage;