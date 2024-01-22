// в цьому файлі можна зібрати всі функції для роботи з localStorage.

const LOCAL_STORAGE_KEY = 'tasks';

function saveTask(task) {
  const arrayOfObject = getAll();
  arrayOfObject.push(task);

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arrayOfObject));
}

function getAll() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

// варіант здійснення експорту: в результаті при імпорті в тебе буде об'єкт localStorageAPI в якому буде метод saveTask;

export const localStorageAPI = { saveTask, getAll };
