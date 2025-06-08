"use strict";
// Создай функцию callAllMethods, которая принимает объект и вызывает все его методы.
// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

const callAllMethods = (object) => {
  for (const key in object) {
    if (typeof object[key] === "function") {
      object[key]()
    }
  }
};

callAllMethods(myObject);
