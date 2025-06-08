"use strict";
const types = {
  str: "string",
  num: 10,
};

const countObjectLength = (object) => {
  let objectLength = Object.keys(object).length; 
  return objectLength
  /*
  Есть смысл в функцию отдельную выносить одну строчку? 
  Ламков говорил, что функция должна выполнять только одно действие, вернее, только одну функцию
  */
};

const isEmpty = (object) => {
  if (countObjectLength(object) > 0) {
    console.log("True");
  } else {
    console.log("False");
  }
};

isEmpty(types);