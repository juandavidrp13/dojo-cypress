describe('My First Cypress test',() =>{
    it('first Assert', () =>{
        expect(true).to.equal(true);
    })

    it('first cypress test on a webpage', () =>{
        cy.visit('https://example.cypress.io/')
        cy.contains('type').click()
        cy.url().should('include','/commands/actions')

        cy.get('.action-email')
          .type('jdavid1926@gmail.com')
          .should('have.value','jdavid1926@gmail.com')
    })
})