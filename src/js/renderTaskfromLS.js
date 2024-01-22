import { localStorageAPI } from './localStorageAPI';
import { createMarkUp } from './createMarkUp';
import { refs } from './refs';

export function renderTaskfromLS() {
  // отримуємо масив об'єктів зlocalStorage (обовязково треба розпарсити дані)
  const tasks = localStorageAPI.getAll();

  // перебираємо цей масив map-ом - map повертає масив такої ж довжини в якому кожен елемент буде тим, що поверне кол-бек функція.
  // Перетворюємо масив в рядок за доп.join('');
  const markup = tasks.map(createMarkUp).join('');
  refs.list.insertAdjacentHTML('beforeend', markup);
}
