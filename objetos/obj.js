var pessoa = {
  nome: "Andre",
  idade: "28",
};

console.log(pessoa.idade);

// Métodos
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// Organizar o Código

Math.PI;
Math.random();

var pi = Math.PI;
console.log(Math.random());
console.log(pi);

var menu = {
  width: 800,
  heigth: 50,
  background: "#81f",
};

menu.background = "#000";
menu.color = "blue";

menu.esconder = function () {
  console.log("Escondi");
};

var bg = menu.background;
