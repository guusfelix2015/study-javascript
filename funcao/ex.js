// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado) {
  return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calculaPerimetro(lado) {
  return lado * 4;
}

console.log(calculaPerimetro(3));

// Crie uma função que retorne o seu nome completo
function retornaNome(nome, sobrenome) {
  console.log(`${nome} ${sobrenome}`);
}
retornaNome("Gustavo", "Felix");
// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par

function numeroPar(numero) {
  if (numero % 2 === 0) {
    console.log("è par");
  } else {
    console.log("é impar");
  }
}
numeroPar(3);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function type(cor) {
  if (typeof cor === "string") {
    return true;
  } else {
    return false;
  }
}
console.log(type(2));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("click", function () {
  console.log("Gustavo Felix");
});

// Corrija o erro abaixo
var totalPaises = 193; // solução
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
