const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsList = document.getElementById("ingredients");
  // console.log(ingredientsList);

const addIngredientToTheList = (ingredients) => {
  ingredients.forEach(ingredient => {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.textContent = ingredient;
  ingredientsItemEl.classList.add('item');
  // console.log(ingredientsItemEl);

  ingredientsList.append(ingredientsItemEl);
  })
  
  return ingredientsList;
};

console.log(addIngredientToTheList(ingredients));
