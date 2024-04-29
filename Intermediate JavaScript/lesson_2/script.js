let prompt = require("prompt-sync")();
const nameUser = prompt("Insira o seu nome: ");

let n = Math.random() * 50;
n = Math.floor(n) + 1;

if (n === 45) {
  console.log(
    `${nameUser} o número sorteado é: ${n.toFixed(0)} e você foi o ganhador`
  );
} else {
  console.log(`${nameUser} o número sorteado é: ${n}`);
}
