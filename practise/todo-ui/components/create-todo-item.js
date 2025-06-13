export const createTodoItemHTML = function (element) {
  return `
    <li class="todo ${element.isCompleted ? "todo--completed" : ""}" data-id="${element.id}" data-todo="item">
      <div class="todo-text">${element.title}</div>
      <div class="todo-actions">
        <button class="button-complete button" data-todo="check-btn">&#10004;</button>
        <button class="button-delete button" data-todo="delete-btn">&#10006;</button>
      </div>
    </li>
  `
}
