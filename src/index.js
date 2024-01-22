/**
 * Створи список справ.
 * На сторінці є два інпути в які має вводиться назва і текст задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
 *
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 * У кожної картки має бути кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */

import { refs } from './js/refs';
import { createMarkUp } from './js/createMarkUp';
import { createObjTask } from './js/createObjTask';
import { localStorageAPI } from './js/localStorageAPI';

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const task = createObjTask();
  refs.list.insertAdjacentHTML('beforeend', createMarkUp(task));
  localStorageAPI.saveTask(task);
  form.reset();
}

// створимо функцію, яку будемо викликати при кожному завантаженні сторінки
// (при перезавантаженні сторінки відповідно теж). Ця функція буде брати з localStorage масив(він зберігається в ключі) і
// по цьому масиву робити розмітку карток. Таким чином при перезав.сторінки картки не будуть зникати.

function renderTaskfromLS() {
  // отримуємо масив об'єктів зlocalStorage (обовязково треба розпарсити дані)
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  // перебираємо цей масив map-ом - map повертає масив такої ж довжини в якому кожен елемент буде тим, що поверне кол-бек функція.
  // Перетворюємо масив в рядок за доп.join('');
  const markup = tasks
    .map(
      obj => `<li class="task-list-item">
      <button class="task-list-item-btn">Удалить</button>
      <h3>${obj.taskName}</h3>
      <p>${obj.taskText}</p>
  </li>`
    )
    .join('');
  refs.list.insertAdjacentHTML('beforeend', markup);
}

renderTaskfromLS();
