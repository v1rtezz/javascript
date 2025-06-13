export const completeTodo = function (todoList, todoId) {
  const index = todoList.findIndex((todo) => todo.id == todoId)
  if (index == -1) {
    console.error("Ошибка! Задачи с таким айди не существует!")
  } else {
    todoList[index].isCompleted = !todoList[index].isCompleted
    localStorage.todoListSave = JSON.stringify(todoList)
  }
}
