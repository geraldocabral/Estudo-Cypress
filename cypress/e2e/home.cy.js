describe('Tela Principal', ()=>{
    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

    it('Verificar a visualização do titulo', ()=>{
        cy.title().should('eq', 'AdoPet');
    })

    it('Verificar se o texto "Quem ama adota" está presente no HTML', ()=>{
        cy.contains('Quem ama adota!').should('be.visible');
    })

    it('Verificar se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.', () => {
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })

    it('Login via página de mensagem', ()=> {
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
    })
})