let NumeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let TextosHTML = document.querySelector(elemento);
    TextosHTML.innerHTML = (texto);
}


function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaDeNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles.')
    } else {
        if (listaDeNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
        listaDeNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}


function ValidacionIntento() {
    let NumeroDeUsuario = parseInt(document.getElementById('numeroingresado').value);
        if (NumeroDeUsuario === NumeroSecreto) {
            asignarTextoElemento ('P', `¡Felicidades!, Acertaste el número, en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.querySelector('#intento').setAttribute('disabled', true);
        } else {
            CleanBox();
            if (NumeroDeUsuario > NumeroSecreto)
            asignarTextoElemento ('p', 'Pst... El número secreto es menor.')
            else {
            asignarTextoElemento ('p', 'Pst... El número secreto es mayor.')
        }
        intentos++;
    }

    return;
}


function parametrosIniciales(){
    asignarTextoElemento ('h1', 'El Número Secreto');
    asignarTextoElemento ('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    NumeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function Restart(){
    CleanBox();
    parametrosIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    document.getElementById('intento').removeAttribute('disabled');
}

function CleanBox() {
    document.getElementById('numeroingresado').value = "";

}

parametrosIniciales();