class Urls{
    visitHomePage() {
        const url = '/' // '/' is used for home page, for any page that goes from it -> '/*end of url*'
        cy.visit(url)
    }
}

export default Urls;