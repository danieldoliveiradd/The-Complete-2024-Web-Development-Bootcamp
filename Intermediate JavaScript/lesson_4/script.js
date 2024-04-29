let prompt = require("prompt-sync")();
const nameUser = prompt("Insira o seu nome: ");

let n = Math.random() * 50;
n = Math.floor(n) + 1;

if (n > 10 && nameUser === 'Daniel') {
  console.log(
    `${nameUser} o número sorteado é: ${n.toFixed(0)} e você foi o ganhador`
  );
} else {
  console.log(`${nameUser} o número sorteado é: ${n}`);
}

/**
 
  && (AND):
  O operador && retorna true se e somente se ambos os operandos forem true.
  Se o primeiro operando for false, o segundo operando nem mesmo será avaliado, porque a expressão inteira já é conhecida como false.
  Se ambos os operandos forem true, o resultado será true.

  || (OR):
  O operador || retorna true se pelo menos um dos operandos for true.
  Se o primeiro operando for true, o segundo operando nem mesmo será avaliado, porque a expressão inteira já é conhecida como true.
  Se ambos os operandos forem false, o resultado será false

  ! (NOT) é um operador lógico em JavaScript que inverte o valor de verdade de uma expressão. Aqui está como funciona:

  O operador ! nega o valor de verdade de uma expressão. Se a expressão for verdadeira, ! a tornará falsa. Se a expressão for falsa, ! a tornará verdadeira.

 */