let nome = document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')

function validacaoForms() {
    if(nome.value == '' || email.value == '' || assunto.value == ''){
        alert("Todos os campos tem que ser preenchidos!")
    }else{
        alert("Dados cadastrados!!")
    }
}

function validaNome() {
    const txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
    }
}

function validaEmail(){
    const txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
    }
}

function validaAssunto(){
    const txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else {
        txtAssunto.style.display = 'none'
    } 
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '500px'
    mapa.style.height = '300px'
}