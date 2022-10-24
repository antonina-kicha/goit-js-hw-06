// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.


// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
let counterValue = 0;
const valueSpanEl = document.querySelector('#value');


// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const btnDecrementEl = document.querySelector('[data-action="decrement"]');
btnDecrementEl.addEventListener('click', counterDecrement);


const btnIncrementEl = document.querySelector('[data-action="increment"]');
btnIncrementEl.addEventListener('click', counterIncrement);

function counterDecrement() {
    counterValue ? counterValue -= 1 : counterValue = 0;
    valueSpanEl.textContent = counterValue;
};

function counterIncrement () {
    counterValue += 1;
    let valueSpanEl = document.querySelector('#value');
    valueSpanEl.textContent = counterValue;
};
 

