import {PI, sumar, resta, multiplicar, dividir } from '../src/modules/matematica.js';
let total, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.
total = sumar(numero1, numero2); // Uso la función sumar importada.
let totalResta = resta (numero1, numero2); 
let totalmultiplicacion = multiplicar (numero1 ,numero2);
let totalDividir = dividir (numero1 ,numero2);
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);
console.log(`restar(${numero1}, ${numero2}) = ${totalResta}`);
console.log(`multiplicar(${numero1}, ${numero2}) = ${totalmultiplicacion}`);
console.log(`dividir(${numero1}, ${numero2}) = ${totalDividir}`);