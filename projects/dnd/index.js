/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

document.addEventListener('mousemove', (e) => {});

export function createDiv() {
  const newDiv = document.createElement('div');
  newDiv.style.position = 'absolute';
  newDiv.classList.add('draggable-div');
  newDiv.style.height = Math.random() * 1000 + 'px';
  newDiv.style.width = Math.random() * 1000 + 'px';
  newDiv.style.backgroundColor =
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  newDiv.style.top = Math.random() * 100 + '%';
  newDiv.style.left = Math.random() * 100 + '%';
  return newDiv;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
