const firstNameInput = '#fname'
const lastNameInput = '#lname'
const lastNameInputInvalid = '#lname:invalid'
const firstNameInputInvalid = '#fname:invalid'
const submitButton = '#formSubmitButton'

class FormPage {
    
    inputOnlyFirstName() {
        cy.get(firstNameInput).clear();
        cy.get(lastNameInput).clear();

        cy.get(firstNameInput).type('text');

        cy.get(submitButton).click();
        cy.get(lastNameInputInvalid).should('exist')
    }

    inputOnlyLastName() {
        cy.get(firstNameInput).clear();
        cy.get(lastNameInput).clear();

        cy.get(lastNameInput).type('text');

        cy.get(submitButton).click();
        cy.get(firstNameInputInvalid).should('exist')
    }

    inputBothNames() {
        cy.get(firstNameInput).clear();
        cy.get(lastNameInput).clear();

        cy.get(firstNameInput).type('text');
        cy.get(lastNameInput).type('text');
        
        cy.get(submitButton).click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('success');
        })
    }
}
export default FormPage;