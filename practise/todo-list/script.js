import { createTodo } from "./components/create-todo.js"
import { completeTodo } from "./components/complete-todo.js"
import { deleteTodo } from "./components/delete-todo.js"
const todos = []

createTodo(todos, "Сделать тудулист")
completeTodo(todos, 1)
deleteTodo(todos, 2)

console.log(todos)