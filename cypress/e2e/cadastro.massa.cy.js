import {usuarios} from './../fixtures/usuario.json'

describe('Página de cadastro', ()=>{
    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    })
    usuarios.forEach(usuario =>{
        it('Deve preencher os campos de cadastro de forma correta', 
            ()=>{
                cy.register(usuario.name, usuario.email, usuario.password, usuario.password)
            }
        )
    })
    
})