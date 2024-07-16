import { ELEMENTS } from "../elements";

const el = ELEMENTS;


class Login {
    loginPageAccess(){
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get(el.loginButton).click();
    }

    loginForm(email, password){
        if(email)
        {
            cy.get(el.inputLoginEmail).type(email);
        }
        if(password)
        {
            cy.get(el.inputLoginPassword).type(password);
        } 
    }

    loginSubmit(){
        cy.get(el.submitButton).click();
    }

    emptyEmail(){
        cy.contains('É necessário informar um endereço de email').should('be.visible');
    }

    emptyPassword(){
        cy.contains('Insira sua senha').should('be.visible');
    }

    badEmail(){
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
    }

    badPassword(){
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    }

    userNotFound(){
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    }
}

export default new Login;