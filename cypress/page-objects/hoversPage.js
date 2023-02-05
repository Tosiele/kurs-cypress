const caption = '.figcaption'

class HoversPage {
    hoverOverFirstElement(){
        cy.get(caption).eq('0').should('not.be.visible').invoke('show').should('be.visible');
    }

    hoverOverSecondElement(){
        cy.get(caption).eq('1').should('not.be.visible').invoke('show').should('be.visible');
    }
    
    hoverOverThirdElement(){
        cy.get(caption).eq('2').should('not.be.visible').invoke('show').should('be.visible');
    }
}
export default HoversPage;