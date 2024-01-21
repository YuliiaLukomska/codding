export function createMarkUp(task) {
  return `<li class="task-list-item">
      <button class="task-list-item-btn">Удалить</button>
      <h3>${task.taskName}</h3>
      <p>${task.taskText}</p>
  </li>`;
}
