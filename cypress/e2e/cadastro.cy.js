describe('Página de cadastro', () => { // Página a ser testada
  beforeEach(()=>{ 
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })
  
  it('Teste preenchendo todos os campos da tela de cadastro de forma correta', () => {
    
    cy.get('input[name="nome"]').type('Geraldo');
    cy.get('input[name="email"]').type('geraldo@email.com');
    cy.get('input[name="password"]').type('Teste123');
    cy.get('input[name="confirm_password"]').type('Teste123');
    cy.contains('button','Cadastrar').click();
  })

  it('Teste de cadastro sem informar os dados necessários', ()=>{
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');
  })

  it('Teste de cadastro informando email e senha inválidos', ()=>{
    cy.get('input[name="nome"]').type('Geraldo');
    cy.get('input[name="email"]').type('geraldo');
    cy.get('input[name="password"]').type('123');
    cy.get('input[name="confirm_password"]').type('Teste123');
    cy.get('[data-test="submit-button"]').click();
    cy.contains('Por favor, verifique o email digitado').should('be.visible');
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    cy.contains('As senhas não batem').should('be.visible');
  })
})