console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio De Janeiro`);

const idadeComprador = 16;
const estaAcompanhada = true; //As variáveis Booleanas são aquelas que podem ser verdadeiras ou falsas (True ou False)

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
  console.log("Comprador maior de idade");
  listaDeDestinos.splice(1, 1); //removendo item
  console.log(listaDeDestinos);
} else if (estaAcompanhada) {
  //Não é necessário botar "== true" ao final da condição pois eu declarei a variável como booleana, então ele capta automaticamente, se for true, irá mostrar, se for false não mostrará. Também se pode imendar um else em outro if para não ficar muito endentado
  console.log("Comprador está acompanhado");
  listaDeDestinos.splice(1, 1); //removendo item
  console.log(listaDeDestinos);
} else {
  console.log("Não é maior de idade então não posso vender");
}

//Operadores lógicos:
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador == 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);


//alt + shit + F serve para endentar o código automaticamente
//alt + para cima/para baixo move o código para direção que quiser