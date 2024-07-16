Cypress.Commands.add('login', (email, password) => {

    if(!email || !password ){
        cy.get('[data-test="submit-button"]').click();
    } else {
        cy.get('[data-test="input-loginEmail"]').type(email);
        cy.get('[data-test="input-loginPassword"]').type(password);
        cy.get('[data-test="submit-button"]').click();  
    } 
})

Cypress.Commands.add('register', (name,email,password,passwordConfirmed) => {

    if(!email && !password && !password){ //Verifica se todos os campos obrigatórios estão vazios
        cy.get('input[name="nome"]').type(name);
        cy.contains('button','Cadastrar').click();
    } else 
    if ( !email && !password){ //Verifica se os campos de email e senha estão vazios
        cy.get('input[name="nome"]').type(name);
        cy.get('input[name="confirm_password"]').type(passwordConfirmed);
        cy.contains('button','Cadastrar').click();
    } else 
    if (!email && !passwordConfirmed){ // Verifica se os campos de email e confirmação de senha estão vazios
        cy.get('input[name="nome"]').type(name);
        cy.get('input[name="password"]').type(password);
        cy.contains('button','Cadastrar').click();
    } else 
    if (!password && !passwordConfirmed){ // Verifica se os campos de senha e confirmaçao de senha estao vazios
        cy.get('input[name="nome"]').type(name);
        cy.get('input[name="email"]').type(email);
        cy.contains('button','Cadastrar').click();
    } else 
    if (!email){ // Verifica se o campos de email esta vazio
        cy.get('input[name="nome"]').type(name);
        cy.get('input[name="password"]').type(password);
        cy.get('input[name="confirm_password"]').type(passwordConfirmed);
        cy.contains('button','Cadastrar').click();
    } else 
    if(!password){ // Verifica se o campo de senha esta vazio
        cy.get('input[name="nome"]').type(name);
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="confirm_password"]').type(passwordConfirmed);
        cy.contains('button','Cadastrar').click();
    } else 
    if (!passwordConfirmed){ // Verifica se o campo de confirmação de senha está vazio
        cy.get('input[name="nome"]').type(name);
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(password);
        cy.contains('button','Cadastrar').click();
    } else { // caso todos os campos estejam preenchidos.
        cy.get('input[name="nome"]').clear().type(name);
        cy.get('input[name="email"]').clear().type(email);
        cy.get('input[name="password"]').clear().type(password);
        cy.get('input[name="confirm_password"]').clear().type(passwordConfirmed);
        cy.contains('button','Cadastrar').click();
    }
  
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })