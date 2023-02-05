const checkbox = 'input[type="checkbox"]'

class CheckboxPage{

    checkBoxOne() {
        cy.get(checkbox).eq(0).check().should('be.checked');
    }

    checkBoxTwo() {
        cy.get(checkbox).eq(1).check().should('be.checked');
    }

    uncheckBoxOne() {
        cy.get(checkbox).eq(0).uncheck().should('not.be.checked');
    }

    uncheckBoxTwo() {
        cy.get(checkbox).eq(1).uncheck().should('not.be.checked');
    }
}
export default CheckboxPage;