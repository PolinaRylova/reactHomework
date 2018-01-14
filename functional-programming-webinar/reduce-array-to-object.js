'use strict';

// Посчитать количество пользователей каждого типа
const users = [
  {type: 'admin', name: 'Ivan Ivanov'},
  {type: 'admin', name: 'Aleksandra Aleksandrova'},
  {type: 'user', name: 'Vasily Vasilenko'},
  {type: 'moderator', name: 'Mark Markov'},
  {type: 'user', name: 'Simeon Simeonov'},
  {type: 'user', name: 'Petr Petrov'}
];

let userTypeCounts = users.reduce((counts, user) => {
  /* в объекте, который хотим получить,
  создаем поле, имя которого соответсвует значению user.type итерируемого объекта из массива users
  (на первой итерации это будет admin);
  чтобы этому полю задать значение, проверяем (counts[user.type] || 0), есть ли в создаваемом объекте уже такое поле со значением:
  если есть, то это существующее значение увеличиваем на единицу;
  если же нет (undefined), значит мы создаём пару ключ значение впервые и полю присваиваем значение 0 + 1. то есть в итоге 1.
  */
  counts[user.type] = (counts[user.type] || 0) + 1;
  return counts;
}, {});

console.log(userTypeCounts); // { admin: 2, user: 3, moderator: 1 }