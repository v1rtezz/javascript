"use strict";

const task = {
  title: "Заголовок",
  description: "Описание",
  isCompleted: false,
};

const cloneAndModify = (object, modifications = { isCompleted: true }) => {
  const objectCopy = Object.assign(task, modifications);
  console.log(objectCopy);
  for (const key in objectCopy) {
    console.log(key);
  }
};

cloneAndModify(task, { isCompleted: true });