'use strict';
// Можно reduce'ить не только в число, но и в любой другой тип, например, в массив:

const arrayOfArrays = [[0, 1], [2, 3, 4], [5, 6]];

let resultArray = arrayOfArrays.reduce((result, subArray) => result.concat(subArray), []);

console.log(resultArray);