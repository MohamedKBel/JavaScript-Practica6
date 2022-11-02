const días = ['Lunes', 'Martes', 'Miércoles','Jueves', 'Viernes', 'Sábado', 'Domingo'];
let abreviadoDias = días.map(Element => Element.slice(0,3));


console.log(días);
console.log(abreviadoDias);
console.log(`Los días de la semana son: ${días} y su abreviación es: ${abreviadoDias}`);