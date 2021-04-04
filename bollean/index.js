var possuiGraduacao = true;
var possuiDoutorado = false;

var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação e não executa o else

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação, mas não possui doutorado

var corFavorita = "Verde";

switch (corFavorita) {
  case "Azul":
    console.log("Ohe para o céu");
    break;
  case "Amarelo":
    console.log("Olhe para o sol");
    break;
  case "Verde":
    console.log("Olhe para a floresta");
    break;
  default:
    console.log("Feche os olhos");
}

// Exercicio

// Verifique se a sua idade é maior do que a de algum parente

var idadeJoao = 24;
var idadeBarbara = 26;

if (idadeJoao > idadeBarbara) {
  console.log("Jão é mais velho");
} else if (idadeJoao < idadeBarbara) {
  console.log("Barbara é mais velha");
}
if (idadeJoao >= idadeBarbara) {
  console.log("Eles tem a mesma idade");
}

// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
var result = brasil === china;
console.log(result);

// O que irá aparecer no console? me retorna o primeiro falso
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console? me retorna o primeiro verdadeiro
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
