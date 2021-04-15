// Crie um método no objeto anterior, que mostre o seu nome completo

var dadosPessoais = {
  nome: "Gustavo",
  sobreNome: "Felix",
  idade: "25",
  ciade: "Patrocínio",
  estado: "Minas Gerais",
};

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.NomeCompleto = function () {
  return `${this.nome} ${this.sobreNome}`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    } else {
      return "Nada";
    }
  },
};
