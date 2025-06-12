"use strict"
// Задание 1.
// Используя массив пользователей
const users = [
  { name: "Alex", age: 24, isAdmin: true },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
]
// напиши функцию getAllAdmins(users), которая возвращает массив всех администраторов.

// const getAllAdmins = function (users) {
//   const admins = [];
//   users.forEach((user) => {
//     if (user.isAdmin) {
//       admins.push(user.name);   // или просто user если нужно не имя, а объект
//     }
//   });
//   console.log(admins);
// };

const getAllAdmins2 = function (array) {
  return array.filter((e) => {
    return e.isAdmin
  })
}

// getAllAdmins(users);
console.log(getAllAdmins2(users))
