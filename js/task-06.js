// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


const inputEl = document.querySelector('input');
inputEl.addEventListener('blur', checkLength);
inputEl.addEventListener('focus', removeClass);

const getLength = Number(inputEl.getAttribute('data-length'));

function checkLength(evt) {
    if (!inputEl.value.length) {
        inputEl.classList.add("noStyles")
    } else {
        if (getLength === inputEl.value.length) {
            inputEl.classList.add("valid")
        }
        else {
        inputEl.classList.add("invalid")
    }
        } 
}

function removeClass(evt) {
    inputEl.classList.remove("noStyles");
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");    
}