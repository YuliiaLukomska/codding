export function createMarkUp(firstInputValue, secondInputValue) {
  return `<li class="task-list-item">
      <button class="task-list-item-btn">Удалить</button>
      <h3>${firstInputValue}</h3>
      <p>${secondInputValue}</p>
  </li>`;
}
