let prompt = require("prompt-sync")();
const nomeUsuario = prompt("Insira o seu nome: ");

let convidados = ['Daniel', 'Bruno', 'Vinicius', 'Gabriel', 'Mateus', 'Eduarda'];

if(convidados.includes(nomeUsuario)) {
    console.log(`Olá ${nomeUsuario} você foi convidado 😉.`)
} else {
    console.log(`Olá ${nomeUsuario} você não foi convidado 😓.`)
}