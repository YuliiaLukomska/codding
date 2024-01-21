import { refs } from './refs';

export function createObjTask() {
  const task = {};
  new FormData(refs.form).forEach((value, key) => {
    task[key] = value;
  });
  return task;
}
