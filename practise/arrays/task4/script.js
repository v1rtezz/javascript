"use strict";
// Напиши свою реализацию метода filter
const myArray = ["Alex", "Peter", "John", "Donald", "Pavel"];
const users = [
  { name: "Alex", age: 24, isAdmin: true },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

const myFilter = function (arr, customSortFunction) {
  const sortedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Alex") {
      sortedArray.push(arr[i]);
    }
  }

  return sortedArray;
};

console.log(myFilter(myArray));

