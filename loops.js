//Questao 5//

// Loop for básico
console.log("Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Loop for com break
console.log("Loop com break:");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Encontrei o 6, parando o loop!");
        break;
    }
    console.log(i);
}

// Loop for com continue
console.log("Pulando números pares:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Pula o resto da iteração
    }
    console.log(i);
}
// Iterando sobre arrays
const fruits = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
console.log("Lista de frutas:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruta ${i+1}: ${fruits[i]}`);
}

//DESAFIO//


// 1. Tabuada do
console.log("Tabuada do 7:");
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 2. Soma de números em um array
const numeros = [5, 8, 12, 3, 7];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log("Soma dos números:", soma);

// 3. Encontrar o menor número
const lista = [9, 4, 11, 2, 15, 7];
let menor = lista[0];

for (let i = 1; i < lista.length; i++) {
    if (lista[i] < menor) {
        menor = lista[i];
    }
}
console.log("Menor número da lista:", menor);
