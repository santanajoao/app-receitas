const fetchByRecipeName = async (recipeName) => {
  const endpoint = (
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`
  );
  const response = await fetch(endpoint);
  const { meals } = await response.json();
  return meals;
};

const fetchRandomRecipe = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const { meals } = await response.json();
  return meals[0];
};

export { fetchByRecipeName, fetchRandomRecipe };
