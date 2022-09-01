// 1
// const numberOfСategories = document.querySelectorAll('.item');

// console.log(`Number of categories: ${numberOfСategories.length}`);


// const numberOfСategoriesArr = [...numberOfСategories]
//     .map(category => `Category: ${category.children[0].textContent} Elements: ${category.children[1].children.length}`)
//     .join('\n');

// 2
// console.log(numberOfСategoriesArr);

// const categoriesEl = document.querySelector('#categories')

// const quantityCategories = param => {
//   const items = param.children.length;
//   return `В списке ${items} категории.`
// }

// console.log(quantityCategories(categoriesEl));


// const items = document.querySelectorAll('.item')

// items.forEach(item => {
//   const titleEl = item.firstElementChild
//   const quantityElement = item.lastElementChild.childElementCount
//   console.log(`Категория: ${titleEl.textContent}, Количество элементов: ${quantityElement}`);
// })

// 3
// const numberOfCategories = document.querySelectorAll('.item');

// function results() {
//     console.log('Number of categories:', numberOfCategories.length);
//     numberOfCategories.forEach(numberOfCategorie => {
//         const sumEl = numberOfCategorie.lastElementChild.childElementCount
//         const categoryEl = numberOfCategorie.firstElementChild
        
//     console.log('Category:', categoryEl.textContent, `Elements: ${sumEl}`);
// });
// }

// results()