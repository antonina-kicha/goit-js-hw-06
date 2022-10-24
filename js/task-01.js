// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const ulCategoriesEl = document.querySelectorAll('#categories .item'); 
console.log('Number of categories:', ulCategoriesEl.length);



// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const liCategoriesEl = document.querySelectorAll('.item');

liCategoriesEl.forEach(function (li, index) {
    console.log('Category:', li.firstElementChild.textContent);
    const liCategoriesListEl = li.lastElementChild;
    console.log('Elements:', liCategoriesListEl.children.length);
})
