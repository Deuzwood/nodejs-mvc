describe('Home', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Title', () => {
        cy.get('h1').contains('It Works!');
    });
});
