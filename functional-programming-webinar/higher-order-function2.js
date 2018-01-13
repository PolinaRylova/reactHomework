'use strict';
/*
 Для создания более универсальных функций используют функции высшего порядка, которые возвращают новую функцию.
*/
/**
 * Создаёт и возвращает новые функции валидации в зависимости от того,
 * какой валидатор и тип переданы в качестве аргументов.
 * @param {Function} isValid - Функция принимает в качестве первого параметра функцию.
 * @param {string} type - Функция принимает в качестве второго параметра строку.
 * @returns {Function} - Функция возвращает функцию, которая выводит в консоль, валидно ли переданное значение.
 */
function createValidator(isValid, type) {
  return function(value) {
    if (isValid(value)) {
      console.log(value + ' is valid ' + type);
    } else {
      console.log(value + ' is not valid ' + type);
    }
  }
}

/**
 * Функция проверяет, является ли переданное значение числом и возвращает true или false
 * @param value - Функция принимает в качестве параметра значение любого типа.
 * @returns {boolean} Функция возвращает булевый тип в зависимости от того, является ли переданное значение числом
 */
function isInteger(value) {
  return Number.isInteger(value);
}

// сохраняем в переменную результат вызова фукции createValidator с параметрами: функцией isInteger и строкой 'integer'
// то есть мы создаём новую функцию для валидации integer.
const validateInteger = createValidator(isInteger, 'integer');

validateInteger(45); // 45 is valid integer
validateInteger('string'); // string is not valid integer
validateInteger(3.14); // 3.14 is not valid integer

// Т.о, на базе одной функции можно содать множество различных функций с разными параметрами.
function isBoolean(value) {
  return typeof value === 'boolean';
}

const validateBoolean = createValidator(isBoolean, 'boolean');

validateBoolean(true); // true is valid boolean
validateBoolean('true'); // true is not valid boolean
validateBoolean(10); // 10 is not valid boolean