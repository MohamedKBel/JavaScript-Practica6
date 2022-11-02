const numeros = [1, 2, 3, 4,5,6];
let suma = numeros.reduce(function (resultado, elemento) {
return resultado + elemento;
}, 0);

console.log(`La suma de estos elementos (${numeros}) es: ${suma}`);
