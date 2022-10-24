// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль 
// при клике на button.change - color и выводит значение цвета в span.color.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btnEl = document.querySelector('.change-color');
btnEl.addEventListener('click', changeColor);

function changeColor (evt) {
  body.style.backgroundColor = getRandomHexColor();
  document.querySelector('.color').textContent = getRandomHexColor();
}

