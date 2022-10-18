console.log(`Trabalhando com Listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio De Janeiro`; uma lista por extenso assim com muitas variáveis não é uma boa prática

const listaDeDestinos = new Array ( //Usando um array para fazer as listas é mais semântico e mais fácil de organizar também, a estrutura do array é chamada de "Construtor"
    `Salvador`, 
    `São Paulo`,
    `Rio De Janeiro`,
)

listaDeDestinos.push(`Curitiba`); //Adicionando um item no array via comando ao invés de adiciona-lo diretamente pelo construtor

console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //Comando para remover itens de um array, precisa indicar (a partir de qual posição você quer remover, quantos itens você irá remover a partir dessa posição)

console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]); //Chamando um item específico de dentor do array informando a sua posição