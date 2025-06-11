"use strict";
// Напиши свою реализацию метода forEach.
const myArray = ["Alex", "Peter", "John", "Donald", "Pavel"];

const myForEach = function(arr, customFunction) {
  for (let i = 0; i < arr.length; i++) {
    let e = arr[i]
    if (typeof customFunction !== "undefined") {
      customFunction(i, arr[i], arr)
    } else {
      console.log(e);
      
    }
  }
}

myForEach(myArray, (index, element, array) => {
  console.log(`В ячейке под индексом ${index} лежит ${element}`);   
})
