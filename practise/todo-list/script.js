const todos = [
  { id: 1, title: "Покормить кота", isCompleted: false },
  { id: 2, title: "Выгулять собаку", isCompleted: true },
  { id: 3, title: "Сходить в магазин", isCompleted: false },
  { id: 4, title: "Записаться к стоматологу", isCompleted: true },
  { id: 5, title: "Доделать туду", isCompleted: false },
  { id: 6, title: "Потрогать траву", isCompleted: true },
]

const createTodo = function (todoList, todoName = "New todo") {
  const newTodo = {}
  newTodo.id = new Date().getMilliseconds()
  newTodo.title = todoName
  newTodo.isCompleted = false
  todoList.push(newTodo)
}

const completeTodo = function (todoList, todoId) {
  const index = todoList.findIndex((todo) => todo.id == todoId)
  todoList[index].isCompleted = !todoList[index].isCompleted
}

const deleteTodo = function (todoList, todoId) {
  const index = todoList.findIndex((todo) => todo.id == todoId)
  todoList.splice(index, 1)
}

createTodo(todos, "Сделать тудулист")
completeTodo(todos, 1);
deleteTodo(todos, 2);

console.log(todos)
