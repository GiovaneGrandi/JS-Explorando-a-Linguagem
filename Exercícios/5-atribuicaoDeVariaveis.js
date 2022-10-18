console.log("Trabalhando com Atribuição de Variáveis");

//const idade = 20; //a declaração "const" é uma constante, ou seja, ela nunca pode mudar de valor, para mudar o valor de uma variável ela não pode ser const
const primeiroNome = "Giovane";
const sobrenome = "Grandi";

console.log(primeiroNome + sobrenome);

//formas de espaçar variáveis:
console.log(primeiroNome, sobrenome);
console.log(primeiroNome + " " + sobrenome);

console.log(`Meu nome é ${primeiroNome} ${sobrenome}`); //concatenando uma string com uma variável sem usar uma operação de soma (Só é possível utilizando a crase " `texto` ")

const nomeCompleto = primeiroNome + sobrenome; 
console.log(nomeCompleto);

let idade; //Declarando variável
idade = 20; //Atribuindo valor
idade = idade+1; //Sobrescrevendo o valor

console.log(idade);