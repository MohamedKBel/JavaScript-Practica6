let array1 = [5, 5, 5, 5, 4, 5, 5];
let array2 = [2, 2, 2, 2, 3, 2, 2, 2, 2];

function elUnico(array) {
    array.sort((a, b) => a - b);
    if (array[0] == array[1]) {
        return array.pop();
    } else {
        return array[0];
    }
}

console.log(elUnico(array1));
console.log(elUnico(array2));
