const firstNameInput = '#fname'
const lastNameInput = '#lname'
const submitButton = '#formSubmitButton'

class FormPage {
    
    inputOnlyFirstName() {
        cy.get(firstNameInput).clear();
        cy.get(lastNameInput).clear();

        cy.get(firstNameInput).type('text');

        cy.get(submitButton).click();
        //doesn't have assertion
    }

    inputOnlyLastName() {
        cy.get(firstNameInput).clear();
        cy.get(lastNameInput).clear();

        cy.get(lastNameInput).type('text');

        cy.get(submitButton).click();
        //doesn't have assertion
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