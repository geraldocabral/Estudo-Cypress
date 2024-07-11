describe('Página de Login', ()=>{

    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })
    it('Teste da página de login, utilizando os dados corretos de inserção', ()=>{
        
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
    })

    it('Teste de login sem informar email e senha', ()=>{
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Insira sua senha').should('be.visible');
    })

    it('Teste de login para email com formato inválido', ()=>{
        cy.get('[data-test="input-loginEmail"]').type('ana');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
    })

    it('Teste de login utilizando senha invalida', ()=>{
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
        cy.get('[data-test="input-loginPassword"]').type('senha');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })
})