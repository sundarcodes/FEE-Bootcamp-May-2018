
var arr = [1, 4, 5, 9];


// 1. Find the squares of all the elements in array
// 2. Find the cubes of all the elements in the array

// 3. Find multiples of 2 in array
// 4. Find multiples of 3 in array

// console.log(squareAll(arr));
// console.log(cubeAll(arr));

// function squareAll(arr, ) {
//     var resultArr = [];
//     for (i = 0; i < arr.length; i++) {
//         resultArr[i] = arr[i] * arr[i];
//     }
//     return resultArr;
// }

// function cubeAll(arr) {
//     var resultArr = [];
//     for (i = 0; i < arr.length; i++) {
//         resultArr[i] = arr[i] * arr[i] * arr[i];
//     }
//     return resultArr;
// }


// function map(arr, fn) {
//     var resultArr = [];
//     for (i = 0; i < arr.length; i++) {
//         resultArr[i] = fn(arr[i]);
//     }
//     return resultArr; 
// }
console.log(arr.map(function (a) {
    return a * a;
}));
console.log(arr);
console.log(arr.map(cube));


console.log('Filtering');

console.log(arr.filter(isMultipleOf2));

console.log(arr.filter(isMultipleOf3));

console.log('Reduce');
console.log(arr.reduce(sum));

function square(a) {
    return a * a;
}

function cube(a) {
    return square(a) * a;
}

function isMultipleOf2(a) {
    return !(a % 2);
}

function isMultipleOf3(a) {
    return !(a % 3);
}

function sum(a, b) {
    return a + b;
}


