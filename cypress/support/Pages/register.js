import { ELEMENTS } from "../elements";

const el = ELEMENTS


class Register {
    registerPageAccess(){
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get(el.registerButton).click();
    }

    registerForm(name, email, password, confirmPassword){
        cy.get(el.inputName).type(name);
        if(email){
            cy.get(el.inputEmail).type(email);
        }
        if(password){
            cy.get(el.inputPassword).type(password);
        }
        if(confirmPassword){
            cy.get(el.inputPasswordConfirm).type(confirmPassword);
        }  
    }

    registerSubmit(){
        cy.get(el.submitButton).click();
    }

    emptyEmail(){
        cy.contains('É necessário informar um endereço de email').should('be.visible');
    }

    emptyPassword(){
        cy.contains('Crie uma senha').should('be.visible');
    }

    emptyConfirmPassword(){
        cy.contains('Repita a senha criada acima').should('be.visible');
    }

    badEmail(){
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
    }

    badPassword(){
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    }

    unmatchPasswords(){
        cy.contains('As senhas não batem').should('be.visible');
    }
}

export default new Register();