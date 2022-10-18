console.log(`\n Trabalhando com Loops`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; //Um if pode ser usado como uma variável

let contador = 0;
let destinoExiste = false;

while (contador < 3) { //O while é a maneira mais simples e prática de se fazer um loop
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  }
  contador = contador + 1;
}

console.log("Seu Destino Existe: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa Viagem!!!");
}else{
    console.log("Desculpe, Tivemos um erro!");
}

//for(let i = 0; i < 3; i++) { //O for é uma maneira mais complexa de se fazer loops, nele se coloca todas as condições juntas e então ele rodará o loop
//    if(listaDeDestinos[i] == destino) { //Condições: Início do loop, a condição para o loop continuar e o que ele fará enquanto a condição persistir, no caso: somar mais um ao i
//        destinoExiste = true;
//   }
//}