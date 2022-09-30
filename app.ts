let readlineSync = require('readline-sync');

//Calculamos el area de un rectangulo (base * altura)

let base = readlineSync.question("Indique la base del rectangulo: ");
let altura = readlineSync.question("Indique la altura del rectangulo: ");
console.log("El area del rectangulo es : " + base * altura);