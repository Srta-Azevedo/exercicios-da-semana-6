// Questão 3//

const a = 10;
const b = 3;

console.log("Adição:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Módulo (resto):", a % b);
console.log("Exponenciação:", a ** b); // A elevação de a à potência de b

let counter = 5;
console.log("Valor inicial:", counter);
console.log("Pós-incremento:", counter++); // Mostra 5, depois incrementa
console.log("Novo valor:", counter);       // Agora mostra 6
console.log("Pré-incremento:", ++counter); // Incrementa primeiro, depois mostra 7
console.log("Valor final:", counter);      // Mostra 7

// Conversão de tipos
const numberAsString = "42";
console.log("String original:", numberAsString, typeof numberAsString);

const convertedNumber = Number(numberAsString);
console.log("Depois de converter:", convertedNumber, typeof convertedNumber);

//DESAFIO//
// --- DESAFIO --- //

// 1. Média de 3 números
const media = (15 + 25 + 38) / 3;
console.log("Média dos três números:", media);

// 2. Conversão de string para número
const stringNumero = "123.45";
const numeroConvertido = Number(stringNumero);
console.log("Número convertido:", numeroConvertido, typeof numeroConvertido);

// 3. Arredondar o resultado de 9.7 / 2
const resultadoDivisao = 9.7 / 2;
const arredondado = Math.round(resultadoDivisao);
console.log("Resultado arredondado:", arredondado);