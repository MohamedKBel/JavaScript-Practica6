function compareArrays(arrayA, arrayB) {
    let filtro = arrayA.filter(el => !arrayB.includes(el));
    return filtro;
}
let a = [1,2,3,4];
let b = [1,2];
console.log(compareArrays(a, b));
