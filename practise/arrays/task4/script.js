"use strict";
// Напиши свою реализацию метода filter
const myArray = ["Alex", "Peter", "John", "Donald", "Pavel"];
const users = [
  { name: "Alex", age: 24, isAdmin: true },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

const myFilter = function(array, customSortFunction) {
  const sortedArray = []
  for (let i = 0; i < array.length; i++) {
    if (customSortFunction(array[i], i, array) === true) {
      sortedArray.push(array[i])
    }
  }
  return sortedArray
}
console.log(
  myFilter(users, (element, index, arr) => {
    return element.name === "Bob"
  })
);
