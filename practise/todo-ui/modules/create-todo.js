import { newTodoInput } from "../app.js";
export const createTodo = function (todoList) {
  const maxId = todoList.reduce((max, e) => Math.max(max, e.id), 0);
  const newTodo = {
    id: maxId + 1,
    title: newTodoInput.value,
    isCompleted: false,
  };
  todoList.push(newTodo);
    localStorage.setItem("todoListSave", JSON.stringify(todoList));
;
};
