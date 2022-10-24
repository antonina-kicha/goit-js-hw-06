function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// получаем введенное значение
const inputEl = document.querySelector('[type="number"]');
inputEl.addEventListener('change', getInputValue);

function getInputValue() {
  const amount = Number(inputEl.value);
  return amount;
}

//определние события для создания коллекции
const divBoxesEl = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
btnCreate.addEventListener('click', linking);

// перебрасываю полученно значение из поля ввода в функцию для создания коллекции  
function linking() {
  const amount = getInputValue();
   createBoxes(amount);
}
 
// создаю коллекцию
function createBoxes(amount) {
  const arr = [];
  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    const markup = `<div style="width: ${30 + i*10}px; heigth: ${30 + i*10}px; background-color: ${color}">${i+1}</div>`;
    arr.push(markup);
  };
  divBoxesEl.insertAdjacentHTML("beforeend", arr.join(""));
}
// удаляет коллекцию
const btnDestroy = document.querySelector('[data-destroy]');
btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  divBoxesEl.innerHTML = ""; 
  inputEl.value = "";
}