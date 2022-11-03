let puntacion = [20, 10, -5, 5, 35, -10, 25, -15, 15, 30, 40, -25];
let positivos = puntacion.filter(Element => Element > 0);
console.log(positivos);
let media = positivos.reduce((acc, currentValue) => acc + currentValue / positivos.length, 0);
console.log(media);