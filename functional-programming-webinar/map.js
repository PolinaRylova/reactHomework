'use strict';
/*
Метод array.map() является ещё одной встроенной функцией высшего порядка.
Создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

var new_array = arr.map(function callback(currentValue, index, array) {
  // Возвращает элемент для new_array
}[, thisArg])

callback - Функция, создающая элемент в новом массиве, принимает три аргумента:
    currentValue - Текущий обрабатываемый элемент массива.
    index - Индекс текущего обрабатываемого элемента в массиве.
    array - Массив, по которому осуществляется проход.
    thisArg - Необязательный параметр: значение, используемое в качестве this при вызове функции callback.

Возвращаемое значение - Новый массив, где каждый элемент является результатом callback функции.
*/
const users = [
  {type: 'admin', name: 'Ivan Ivanov'},
  {type: 'admin', name: 'Aleksandra Aleksandrova'},
  {type: 'user', name: 'Vasily Vasilenko'},
  {type: 'moderator', name: 'Mark Markov'},
  {type: 'user', name: 'Simeon Simeonov'},
  {type: 'user', name: 'Petr Petrov'}
];

/*
let userNames = users.map(function (user) {
  return user.name; // берём только имя от каждого элемента исходного массива и формируем из них новый массив имён
});
*/

// или совсем лаконично на стрелочных функциях
let userNames = users.map(user => user.name);

console.log(userNames);

// но метод map() можно использовать не только для получения каких-то значений из массива, но и для их преобразования
let usersInfo = users.map(user => user.name + ' is ' + user.type);

console.log(usersInfo);

// можно также преобразовывать типы и делать другие полезные операции

// Кроме того, методы можно использовать вместе, то есть вызывать по цепочке:

const isAdmin = user => user.type === 'admin';

let adminNames = users
    .filter(isAdmin)
    .map(user => 'Admin is ' + user.name);

console.log(adminNames);