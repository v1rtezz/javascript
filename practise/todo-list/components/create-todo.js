export const createTodo = function (todoList, todoName = "New todo") {
  const maxId = todoList.reduce((max, e) => Math.max(max, e.id), 0)
  const newTodo = {
    id: maxId + 1,
    title: todoName,
    isCompleted: false,
  }
  todoList.push(newTodo)
}