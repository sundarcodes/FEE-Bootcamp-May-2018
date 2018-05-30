describe('Testing Landing Page', function () {
    it('Page should open', function () {
        cy.visit('http://localhost:3000/');
    });
    it('page should have 3 links', function () {
        cy.get('.float-left a').should('have.length', 3);
        cy.get('.float-left a').contains('About Me');
        cy.get('.float-left a').contains('Posts');
        cy.get('.float-left a').contains('Skills');
    });
    it('Clicking on post should open posts page', () => {
        cy.get('.float-left a').contains('Posts').click();
        cy.url().should('eq', 'http://localhost:3000/posts.html')
    });
})