"use strict";
// Напиши свою реализацию метода forEach.
const myArray = ["Alex", "Peter", "John", "Donald", "Pavel"];

const myForEach = function(arr, customFunction) {
  for (let i = 0; i < arr.length; i++) {
    let e = arr[i]
    if (typeof customFunction !== "undefined") {
      customFunction()
    } else {
      console.log(e);
      
    }
  }
}

myForEach(myArray, () => {
  console.log("dsd"); 
})