
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане 
// должна отображаться строка "Anonymous".

const inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onSearch);

function onSearch(evt) {
    const spanNameEl = document.querySelector('#name-output');
    evt.currentTarget.value.length ? spanNameEl.textContent = evt.currentTarget.value : spanNameEl.textContent = "Anonymous";
}