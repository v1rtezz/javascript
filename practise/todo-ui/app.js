import { renderTodo } from "./components/render-todo.js"
import { createTodo } from "./components/create-todo.js"
import { completeTodo } from "./components/complete-todo.js"
import { deleteTodo } from "./components/delete-todo.js"

const todos = []
export const newTodoInput = document.querySelector("[data-newTodoInput]")
const todoList = document.querySelector("[data-todoList]")
const form = document.querySelector("[data-form]")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (newTodoInput.value == "") return
  createTodo(todos)
  renderTodo(todos, todoList)
  newTodoInput.value = ""
})

todoList.addEventListener("click", (e) => {
  const target = e.target.dataset.todo
  const currentTodo = e.target.closest('li[data-todo="item"]')
  if (target == "check-btn") {
    completeTodo(todos, +currentTodo.dataset.id)
    currentTodo.classList.toggle("todo--completed")
  } else if (target == "delete-btn") {
    deleteTodo(todos, +currentTodo.dataset.id)
    renderTodo(todos, todoList)
  }
})