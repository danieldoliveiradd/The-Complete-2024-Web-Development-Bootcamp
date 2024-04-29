let prompt = require('prompt-sync')();
const nameUser = prompt("What's is your name? ");

let n = Math.random() * 100;
console.log(`${nameUser} o número sorteado é: ${n.toFixed(0)}`);
