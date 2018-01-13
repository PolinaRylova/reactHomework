"use strict";
/*
Функциональное программирование (ФП) - это парадигма программирования, при которой функии используются как аргументы.
ФП оперирует функциональной композицией, то есть функции расширяют функции
(в отличие от ООП, которое оперирует наследованием, где классы расширяют классы).

Функция, которая принимает другую функцию в качестве аргумента или возвращает другую функцию в качестве результата,
называется ФУНКЦИЕЙ ВЫСШЕГО ПОРЯДКА (higher order function).

Функция предикат - функция, которая возвращает булевый тип.
*/

function validate(isValid, type, value) { // передаем функцию isValid как аргумент
  // вызываем функцию isValid внутри нашей фукции validate, поэтому последняя является функцией высшего порядка
  if (isValid(value)) {
    console.log(value + ' is valid ' + type);
  } else {
    console.log(value + ' is not valid ' + type);
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

// передаем в вызов функции validate первым аргументом ссылку на нашу функцию isInteger,
// так как хотим вызвать последнюю внутри первой, которая является функцией высшего порядка
validate(isInteger, 'integer', 33); // 33 is valid integer
validate(isInteger, 'integer', 42.5); // 42.5 is not valid integer
validate(isInteger, 'integer', 'hi'); // hi is not valid integer

// передача функции как аргумента другой функции даёт возможность переиспользовать эту вторую функцию с другими функциями-аргументами

/**
 * Функция проверяет, имеет ли переданное значение тип boolean.
 * @param value - Функция принимает в качестве параметра значение любого типа.
 * @returns {boolean} Функция возвращает булевый тип в зависимости от того, имеет ли переданное значение тип boolean
 */
function isBoolean(value) {
  return typeof value === 'boolean';
}

validate(isBoolean, 'boolean', true); // true is valid boolean
validate(isBoolean, 'boolean', 'true'); // true is not valid boolean
validate(isBoolean, 'boolean', 10); // 10 is not valid boolean
