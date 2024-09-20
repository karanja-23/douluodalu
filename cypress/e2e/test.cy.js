describe('My first test', function() {
    it ('visits url', function(){
        cy.visit("http://127.0.0.1:5500/index.html")
        cy.title().should('eq','http://127.0.0.1:5500/index.html')
        cy.contains('mylogo')
    });
});