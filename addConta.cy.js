/// <reference types='cypress'/>
describe('Add contas ao seu barriga ', () => {
    
    it('Logar com email e senha validos e adiconar uma conta', () => {
        cy.visit('https://seubarriga.wcaquino.me/logout');
        cy.get('#email').type('1234@1234')
        cy.get('#senha').type('1234')
        cy.get('.btn').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(1) > a').click()
        cy.get('#nome').type('Aluguel 1 ')
        cy.get('.btn').click()
        
    });

    it('Listar, editar e apagar uma conta ', () => {
        cy.visit('https://seubarriga.wcaquino.me/logout');
        cy.get('#email').type('1234@1234')
        cy.get('#senha').type('1234')
        cy.get('.btn').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.get('[href="/editarConta?id=2057821"] > .glyphicon').click()
        cy.get('#nome').clear//.type('Modificando1') // tenho que arrumar um jeito de apagar primeiro
        cy.get('#nome').type('tentativa 1'); // ele continua adicionando sem apagar 
        cy.get('.btn').click()
        cy.get('[href="/removerConta?id=2054409"] > .glyphicon').click() // Remover uma conta
        
    });

    
});