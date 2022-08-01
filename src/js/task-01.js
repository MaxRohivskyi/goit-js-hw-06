const numberOfСategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${numberOfСategories.length}`);


const numberOfСategoriesArr = [...numberOfСategories]
    .map(category => `Category: ${category.children[0].textContent} Elements: ${category.children[1].children.length}`)
    .join('\n');

console.log(numberOfСategoriesArr);


