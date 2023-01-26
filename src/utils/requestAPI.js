const fetchByRecipeName = async (recipeName) => {
  const endpoint = (
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`
  );
  const response = await fetch(endpoint);
  const { meals } = await response.json();
  return meals;
};

const fetchByRecipeID = async (recipeID) => {
  const endpoint = (
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`
  );
  const response = await fetch(endpoint);
  const { meals } = await response.json();
  const recipe = meals[0];

  const ingredients = getIgredients(recipe);
  const recipeInfos = getUsefulInfos(recipe);

  return { ingredients, ...recipeInfos };
};

const fetchRandomRecipe = async () => {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const response = await fetch(endpoint);
  const { meals } = await response.json();
  return meals[0];
};

const getIgredients = (recipeObj) => {
  const maxIgredients = 20;
  const ingredients = [];
  for (let counter = 1; counter <= maxIgredients; counter += 1) {
    const ingredient = recipeObj[`strIngredient${counter}`];
    const measure = recipeObj[`strMeasure${counter}`];

    if (ingredient === '') break;
    
    ingredients.push(`${measure} - ${ingredient}`);
  }
  return ingredients;
};

const getUsefulInfos = (recipeObj) => {
  const {
    idMeal, strMeal, strCategory, strInstructions, strMealThumb,
  } = recipeObj;

  return ({
    idMeal, strMeal, strCategory, strInstructions, strMealThumb,
  });
};

export { fetchByRecipeName, fetchRandomRecipe, fetchByRecipeID };
