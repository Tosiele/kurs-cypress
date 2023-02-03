describe('hw_rozszerzenie', () => {
    it('testing put method', () => {
        
    cy.request({
    method: 'PUT',
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    body: JSON.stringify({
        id: 1,
        title: 'twoja mama',
        body: 'ur mom is great nvm',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then((response) => {
    cy.expect(response.status).to.eq(200)
})
})

    it('testing delete method', () => {
    cy.request({
    method: 'DELETE',        
    url: 'https://jsonplaceholder.typicode.com/posts/1'
    
}).then((response) => {
    cy.expect(response.status).to.eq(200)
})
})
});