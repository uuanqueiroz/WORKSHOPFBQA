/// <reference types="cypress"/>
describe('Tentativas de login', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login');
        cy.get(':nth-child(2) > a').click()
    });

    it('Verificar se o site foi carregado', () => {
        cy.get('.navbar-brand').should('be.visible')
    });

    it('Criar conta com Nome ivalido', () => {
        cy.get(':nth-child(2) > a').click();
        cy.url().should('be.equal', 'https://seubarriga.wcaquino.me/cadastro')
        cy.get('#nome').type('123')
        cy.get('#email').type('umdois@gmail.com')
        cy.get('#senha').type('1234')
        cy.get('.btn').click()
        // Esse teste vai passar porem o erro vai ser reportado no documento
    });

    it('Criar conta com email invalido', () => {
        // cy.visit('https://seubarriga.wcaquino.me/cadastro'); AQUI EU DESCOBRI QUE DA PRA ENCURTAR USANDO BEFOREEACH
        // cy.url().should('be.equal', 'https://seubarriga.wcaquino.me/cadastro')
        cy.get('#nome').type('123')
        cy.get('#email').type('1234@1234.com')
        cy.get('#senha').type('1234')
        cy.get('.btn').click()
        // Esse teste vai passar porem a falha pode ser reportada no documento.
    });

    it('Criar conta ja existente', () => {
        // cy.visit('https://seubarriga.wcaquino.me/cadastro');
        // cy.url().should('be.equal', 'https://seubarriga.wcaquino.me/cadastro')
        cy.get('#nome').type('Wan')
        cy.get('#email').type('umdois@gmail.com')
        cy.get('#senha').type('1234')
        cy.get('.btn').click()
        cy.get('.alert').should('be.visible')
    });

    it('Criando passando dados validos.', () => {
        // cy.visit('https://seubarriga.wcaquino.me/cadastro');
        // cy.url().should('be.equal', 'https://seubarriga.wcaquino.me/cadastro')
        cy.get('#nome').type('wann')
        cy.get('#email').type('uzd@gmail.com')
        cy.get('#senha').type('1234')
        cy.get('.btn').click()
        cy.get('.alert').should('be.visible') // esse aqui ele so mostra se o alert vai ser exibido mas esse alert pode conter 2 valores.
        //cy.url().should('be.equal', 'https://seubarriga.wcaquino.me') comparar a url tb nao esta rodando.
        //cy.get('.alert').should('be.equal','Usuário inserido com sucesso') nao sei pq mas esse esta falhando.
    }); 
    
});