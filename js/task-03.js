const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().
const ulEl = document.querySelector('.gallery');
 
const arr = [];
images.forEach((image) => {
  const markup = `<li class="item"><div class="thumb"><img src="${image.url}" alt="${image.alt}" width = 300px></div></li>`;
  arr.push(markup);
});

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
ulEl.insertAdjacentHTML("beforeend", arr.join(""));

// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
const thumbEl = document.querySelector('.thumb');
const imgEl = document.querySelector('img');
ulEl.style.listStyle = "none";
ulEl.style.display = "flex";
ulEl.style.flexWrap = "wrap";

ulEl.style.gap = "10px";
thumbEl.style.height = "200px";
imgEl.style.height = "100%";
