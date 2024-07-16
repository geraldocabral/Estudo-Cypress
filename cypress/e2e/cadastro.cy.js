import Register from "../support/Pages/register";


describe('Página de cadastro', () => { // Página a ser testada
  beforeEach(()=>{ 
    Register.registerPageAccess();
  })
  
  it('Teste preenchendo todos os campos da tela de cadastro de forma correta', () => {
     Register.registerForm('Geraldo Cabral', 'geraldo@email.com', 'Abcd12345','Abcd12345');
     Register.registerSubmit();
  })

  it('Teste de cadastro sem informar os dados necessários', ()=>{
    Register.registerForm('Geraldo', '', '', '');
    Register.registerSubmit();
    Register.emptyEmail();
    Register.emptyPassword();
    Register.emptyConfirmPassword();  
  })

  it('Teste de cadastro informando email e senha inválidos', ()=>{
    Register.registerForm('Geraldo','geraldo', '123', 'teste')
    Register.registerSubmit();
    Register.badEmail();
    Register.badPassword();
    Register.unmatchPasswords(); 
  })
})