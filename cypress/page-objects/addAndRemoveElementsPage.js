const addButton = 'button'
const deleteButton = '.added-manually'
let numberOfButtons = -1;

class AddAndRemoveElemensPage{

    addElement() {
        cy.get(addButton).contains('Add Element').click();
        numberOfButtons++;
        cy.get(deleteButton).eq(numberOfButtons).should('exist');
    }

    deleteElement() {
        cy.get(deleteButton).eq(numberOfButtons).click();
        cy.get(deleteButton).eq(numberOfButtons).should('not.exist');
        numberOfButtons--;
    }

}
export default AddAndRemoveElemensPage;