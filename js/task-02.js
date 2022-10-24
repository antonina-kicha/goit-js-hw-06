const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ul = document.querySelector("ul#ingredients");
const newUl = [];

ingredients.forEach(function (li, index) {
  const list = document.createElement("li");
  list.textContent = li;
  list.classList.add("item");
  newUl.push(list)
})
  ul.append(...newUl);





