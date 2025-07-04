const form = document.getElementById('form')
const username = document.getElementById('username')
const telefone = document.getElementById('telefone')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo');

form.addEventListener('submit',(e) => {
    e.preventDefault()

  checkInputs()
})

function checkInputs() {
    const usernameValue = username.value.trim()
    const telefoneValue = telefone.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    if(usernameValue === '') {
        //mostrar o error
        // adicionar a classe error
        errorValidation(username, 'Preencha esse campo') 
    }else {
        //adicionar a classe de sucesso
        successValidation(username)
    }

    if(telefoneValue === '') {
        errorValidation(telefone, 'Prenncha esse campo')
    }else {
        successValidation(telefone)
    }
    
    if(emailValue === '') {
        errorValidation(email, 'Preencha esse campo')
    }else {
        successValidation(email)
    }

    if(passwordValue === '') {
        errorValidation(password, 'Preencha esse campo')
    
    }else if(passwordValue.lenght < 8) {
        errorValidation(password, 'A senha deve ter mais que 8 caracteres')
    }else{
        successValidation(password)
    }

     if(passwordtwo === '') {
    errorValidation(passwordtwo, 'Preencha esse campo')
}else  if(passwordValue !== passwordtwoValue ) {
    errorValidation(passwordtwo, 'Senha não são iguais')
}else {
    successValidation(passwordtwo)
}
   
}

function errorValidation(input, message) {
    const formContent = input.parentElement;
    const small = formContent.querySelector('small')

    small.innerText = message

    formContent.className = 'form-contet error'
}

function successValidation(input) {
    const formContent = input.parentElement;

    formcontent.className = 'form-contente success'
}