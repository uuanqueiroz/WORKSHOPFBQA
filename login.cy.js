/// <reference types='cypress'/>
describe('Tentativas de login', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login');
    });

    it('Verificar se o site foi carregado', () => {
        cy.get('.navbar-brand').should('be.visible');
    });

    it('Logar com campos vazios ', () => {
        cy.get('.btn').click()
        cy.get('.body-index > :nth-child(2)').should('be.visible')
        cy.get('.body-index > :nth-child(3)').should('be.visible') 
    });

    it('Logar com email invalido', () => {
        cy.get('#email').type('1234@1234')
        cy.get('#senha').type('1234')
        cy.get('.btn').click()
    }); // vai logar mas o erro vai estar documentado.


    it('Logar com email existente e outra senha', () => {
        cy.get('#email').type('1234@1234')
        cy.get('#senha').type('12345')
        cy.get('.btn').click()
        cy.get('.alert').should('have.text', 'Problemas com o login do usuário')
    });

    it('Logar com email e senha validos', () => {
        cy.get('#email').type('1234@1234')
        cy.get('#senha').type('1234')
        cy.get('.btn').click()
        //cy.get('.alert').should('have.text', 'Problemas com o login do usuário')
    });
});