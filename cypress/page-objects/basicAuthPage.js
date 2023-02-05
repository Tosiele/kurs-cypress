const inputUsername = '#ba_username'
const inputPassword = '#ba_password'
const correctUsername = 'admin'
const correctPassword = 'admin'
const errorMessage = '#loginFormMessage'
const button = 'button'
const loggedInMessage = '#loggedInMessage'

class BasicAuthPage{
    
    inputInvalidCredentials() {
    cy.get(inputUsername).clear();
    cy.get(inputPassword).clear();

    cy.get(inputUsername).type('some nonsense');
    cy.get(inputPassword).type('some other nonsense');

    cy.get(button).contains('Login').click();
    cy.get(errorMessage).contains('Invalid credentials').should('be.visible');
    cy.get(loggedInMessage).should('not.exist');
    }

    inputValidCredentials() {
    cy.get(inputUsername).clear();
    cy.get(inputPassword).clear();

    cy.get(inputUsername).type(correctUsername);
    cy.get(inputPassword).type(correctPassword);

    cy.get(button).contains('Login').click();
    cy.get(loggedInMessage).should('be.visible');
    cy.get(errorMessage).should('not.exist');

    cy.visit('/');
    }

}
export default BasicAuthPage;