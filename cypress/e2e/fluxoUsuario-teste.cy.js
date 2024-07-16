import Login from "../support/Pages/login"
import Profile from "../support/Pages/profile";


describe('Perfil de usuario', ()=> {
    it('Teste de fluxo de acesso ao perfil de usuario', ()=> {
        Login.loginPageAccess();
        Login.loginForm('ana@email.com', 'Senha123');
        Login.loginSubmit();
        Profile.profileAcess();
    })
})