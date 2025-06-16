import { renderTodo } from "./modules/render-todo.js";
import { createTodo } from "./modules/create-todo.js";
import { completeTodo } from "./modules/complete-todo.js";
import { deleteTodo } from "./modules/delete-todo.js";
import { createTodoItemHTML } from "./modules/create-todo-item.js";

const todos = JSON.parse(localStorage.getItem("todoListSave")) || [];

export const newTodoInput = document.querySelector("[data-newTodoInput]");
export const todoList = document.querySelector("[data-todoList]");
const form = document.querySelector("[data-form]");

renderTodo(todos, todoList);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (newTodoInput.value == "") return;
  createTodo(todos);
  const lastTodo = todos[todos.length - 1];
  todoList.insertAdjacentHTML("afterbegin", createTodoItemHTML(lastTodo));
  newTodoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  const target = e.target.dataset.todo;
  const currentTodo = e.target.closest('li[data-todo="item"]');
  if (target == "check-btn") {
    completeTodo(todos, +currentTodo.dataset.id);
    currentTodo.classList.toggle("todo--completed");
  } else if (target == "delete-btn") {
    deleteTodo(todos, +currentTodo.dataset.id);
    currentTodo.remove();
  }
});
