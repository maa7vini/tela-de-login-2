function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login === 'admin' && senha === '12345'){
        alert('Sucesso');
    }else {
        alert('Usuário ou Senha inválidos');
    }
}