export const deleteTodo = function (todoList, todoId) {
  const index = todoList.findIndex((todo) => todo.id == todoId);
  if (index == -1) {
    console.error("Ошибка! Задачи с таким айди не существует!");
  } else {
    todoList.splice(index, 1);
    localStorage.setItem("todoListSave", JSON.stringify(todoList));

  }
};
