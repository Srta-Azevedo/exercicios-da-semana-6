//Questao 4//

// Verificação com múltiplas condições
const hour = 14;

if (hour < 12) {
    console.log("Bom dia!");
} else if (hour < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

// Operadores lógicos
const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("Não precisa trabalhar hoje!");
} else {
    console.log("Dia de trabalho!");
}

// Operador ternário
const age = 17;
const status = age >= 18 ? "Adulto" : "Menor";
console.log("Status:", status);


// --- DESAFIO --- //

// 1. Classificação de notas
const nota = 85;
let conceito;

if (nota >= 90) {
  conceito = "A";
} else if (nota >= 80) {
  conceito = "B";
} else if (nota >= 70) {
  conceito = "C";
} else if (nota >= 60) {
  conceito = "D";
} else {
  conceito = "F";
}

console.log("Conceito:", conceito);

// 2. Par ou ímpar
const numero = 7;

if (numero % 2 === 0) {
  console.log(numero, "é par");
} else {
  console.log(numero, "é ímpar");
}

// 3. Pode dirigir?
const idade = 20;
const temHabilitacao = true;

if (idade >= 18 && temHabilitacao) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}
