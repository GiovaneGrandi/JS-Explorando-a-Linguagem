console.log(`Trabalhando com Condicionais Encadeadas`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio De Janeiro`);

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) { //Dá para juntar dois ou mais ifs em um comando só para evitar a repetição de código e para não extender muito o código
  console.log("Passagem Comprada!!!");                //Se usa o || para dizer que ou uma condição ou a outra precisa ser cumprida
  listaDeDestinos.splice(2, 1); //removendo item
  console.log(listaDeDestinos);
} else {
  console.log("Não é maior de idade então não posso vender");
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada) { //O "&&" sinaliza que para o comando ser ativado todas as condições precisam ser cumpridas, uma e a outra
    console.log("Boa Viagem!!!");
} else {
    console.log("Você não pode embarcar!");
}
