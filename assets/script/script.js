let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let nomeOK = false
let emailOK = false
let assuntoOK = false


nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {

    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido!'
    } else {
        txtNome.innerHTML = 'Nome válido!'
        nomeOK = true
    }

}


function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email inválido!'
    } else {
        txtEmail.innerHTML = 'Email válido!'
        emailOK = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Máximo de 100 caracteres!'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }
}

function enviar() {
    if (nomeOK == true && emailOK == true && assuntoOK == true) {
        alert('Formulario enviado com sucesso!')
    } else {
        alert('Formulario invalido, verifique os campos novamente!')
    }
}

function mapaZoom() {
    mapa.style.width= '500px'
    mapa.style.height= '500px'
}

function mapaNormal() {
    mapa.style.width= '300px'
    mapa.style.height= '300px'
}