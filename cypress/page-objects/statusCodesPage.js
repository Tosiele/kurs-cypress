const anchor200 = '#200siteAnchor'
const url200 = 'http://httpstat.us/200'
const anchor305 = '#305siteAnchor'
const url305 = 'http://httpstat.us/305'
const anchor404 = '#404siteAnchor'
const url404 = 'http://httpstat.us/404'
const anchor500 = '#500siteAnchor'
const url500 = 'http://httpstat.us/500'

class StatusCodesPage {

    click200StatusCode() {
        cy.get(anchor200).click({ force: true });
        cy.url().should('be.equal', url200)

        cy.visit('/')
    }

    click305StatusCode() {
        cy.get(anchor305).click({ force: true });
        cy.url().should('be.equal', url305)

        cy.visit('/')
    }
    
    click404StatusCode() {
        cy.get(anchor404).click({ force: true });
        cy.url().should('be.equal', url404)

        cy.visit('/')
    }
    
    click500StatusCode() {
        cy.get(anchor500).click({ force: true });
        cy.url().should('be.equal', url500)

        cy.visit('/')
    }

}
export default StatusCodesPage;