"use strict";
// Задание 2.
// Напиши функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

const users = ["Alex", "Peter", "John", "Donald", "Pavel"];

const first = function (arr, n = 1) {
  const newArray = new Array(n);
  if (n > arr.length) {
    n = arr.length;
  }

  for (let i = 0; i < n; i++) {
    newArray[i] = arr[i]
  }
  return newArray;
};

// const first = function (arr, n) {
//   const newArray = [];
//   // Знаю, что лучше не делать больше, чем требуется т.к. за это мне не доплатят, 
//   // но сделал для тренировки чтобы не было тонны undefined в случае, если с придет слишком большое n
//   if (n > arr.length) {
//     n = arr.length
//   }
  
//   switch (n) {
//     case undefined: {
//       newArray.push(arr[0]);
//       return newArray;
//       break;
//     }
//     // Проверка оказалась лишней
//     default: {
//       for (let i = 0; i < n; i++) {
//         newArray.push(arr[i]);
//       }
//       return newArray;
//     }
//   }
// };

console.log(first(users, 2));
