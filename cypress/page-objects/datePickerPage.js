const input = '#start'
const correctDate = '2020-12-31'
const incorrectDate = '2021-01-31'
const correctionToWrongDate = '2020-01-31'

class DatePickerPage {

    pickCorrectDate(){
        cy.get(input).type(correctDate)
        cy.get(input).should('have.value', correctDate)
    }

    pickIncorrectDate(){
        cy.get(input).type(incorrectDate)
        cy.get(input).should('have.value', correctionToWrongDate)
    }

}
export default DatePickerPage;