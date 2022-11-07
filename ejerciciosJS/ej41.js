function arrayGenerator(min,max,num) {
    let lista = [];
    for (let i = 0; i < num; i++) {
        let aleatorio = Math.floor((Math.random()*(max-min))+min);
        lista.push(aleatorio);
    }
    let pares = lista.filter(Element => Element %2 === 0);
    let duplicar = pares.map(Element => Element*2+10);
    let filtrado = duplicar.filter(Element => Element > 10 && Element < 100);
    let sumaFinal = filtrado.reduce((acc,cur) => acc + cur,0);
    return console.log(`La lista original es: (${lista}) y los pares son: (${pares}). Despues de hacer el duplicado y la suma de 10 es: (${duplicar}). Despues de filtar los valores > 10 y < 100 es: (${filtrado}) y la suma final de los valores es: ${sumaFinal}`);
}
let min = Number(prompt("Define un minimo para este array"));
let max = Number(prompt("Define un maximo para este array"));
let num = Number(prompt("Define el numero de elementos para este array"));
arrayGenerator(min,max,num);
