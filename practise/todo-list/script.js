const todos = [
  { id: 1, title: "Покормить кота", isCompleted: false },
  { id: 2, title: "Выгулять собаку", isCompleted: true },
  { id: 3, title: "Сходить в магазин", isCompleted: false },
  { id: 4, title: "Записаться к стоматологу", isCompleted: true },
  { id: 5, title: "Доделать туду", isCompleted: false },
  { id: 6, title: "Потрогать траву", isCompleted: true },
]

const createTodo = function (todoList, todoName = "New todo") {
  const newTodo = {
    id: todoList.length + 1,
    titile: todoName,
    isCompleted: false,
  }
  todoList.push(newTodo)
}

const completeTodo = function (todoList, todoId) {
  const index = todoList.findIndex((todo) => todo.id == todoId)
  if (index == -1) {
    console.error("Ошибка! Задачи с таким айди не существует!")
  } else {
    todoList[index].isCompleted = !todoList[index].isCompleted
  }
}

const deleteTodo = function (todoList, todoId) {
  const index = todoList.findIndex((todo) => todo.id == todoId)
  if (index == -1) {
    console.error("Ошибка! Задачи с таким айди не существует!")
  } else {
    todoList.splice(index, 1)
  }
}

createTodo(todos, "Сделать тудулист")
completeTodo(todos, 13)
deleteTodo(todos, 2)


console.log(todos)