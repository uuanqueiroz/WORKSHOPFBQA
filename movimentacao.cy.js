/// <reference types='cypress'/>
describe('Criar movimentacao', () => {

        it('Logar com email e senha validos e fazer uma adicao de movimentacao', () => {
        cy.visit('https://seubarriga.wcaquino.me/login');
        cy.get('#email').type('1234@1234')
        cy.get('#senha').type('1234')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > a').click()
        cy.get('#tipo').select('DESP')
        cy.get('#data_transacao').type('10/03/2024')
        cy.get('#data_pagamento').type('13/03/2024')
        cy.get('#descricao').type('Se nao pagar ate o dia proposta sera despedido.! ')
        cy.get('#interessado').type('Seu madruga')
        cy.get('#valor').type('1333')
        cy.get('#status_pendente').click()
        cy.get('.btn').click()
    });
});