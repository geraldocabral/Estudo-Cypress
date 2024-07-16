import Login from "../support/Pages/login"

describe('Página de Login', ()=>{

    beforeEach(()=>{
        Login.loginPageAccess();   
    })

    it('Teste da página de login, utilizando os dados corretos de inserção', ()=>{
        Login.loginForm('ana@email.com', 'Senha123');
        Login.loginSubmit();
    })

    it('Teste de login sem informar email e senha', ()=>{
        Login.loginForm();
        Login.loginSubmit();
        Login.emptyEmail();
        Login.emptyPassword();
    })

    it('Teste de login para email com formato inválido', ()=>{
        Login.loginForm('geraldo', 'SenhaTeste123');
        Login.loginSubmit();
        Login.badEmail();
    })

    it('Teste de login utilizando senha invalida', ()=>{
        Login.loginForm('geraldo@email.com', 'senha');
        Login.loginSubmit();
        Login.badPassword();
    })

    it('Teste de login de usuario não cadastrado', ()=>{
        Login.loginForm('geraldo@email.com', 'Abcd12345');
        Login.loginSubmit();
        Login.userNotFound();
    })
})