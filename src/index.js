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

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const task = createObjTask();
  refs.list.insertAdjacentHTML('beforeend', createMarkUp(task));
  form.reset();
}
