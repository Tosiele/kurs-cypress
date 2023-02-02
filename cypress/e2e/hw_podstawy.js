describe('home work for basics', () => {
    it('making a screenshot', function() {
        
        cy.visit('https://fabrykatestow.pl/');
        cy.get('span').contains('POKAŻ CZEGO SIĘ NAUCZĘ').eq(0).click({force: true});
        cy.scrollTo('.elementor-background-overlay');
        cy.screenshot();


    })
})

//<div class="elementor-background-overlay"></div>