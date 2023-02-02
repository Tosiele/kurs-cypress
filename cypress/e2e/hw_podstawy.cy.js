describe('home work for basics', () => {
    it('making a screenshot', function() {
        
        cy.visit('https://fabrykatestow.pl/');
        cy.get('span').contains('POKAŻ CZEGO SIĘ NAUCZĘ').eq(0).click({force: true});
        cy.get('div[class="elementor-background-overlay"]').eq(1).screenshot({force: true});


    })
})

//<div class="elementor-background-overlay"></div>