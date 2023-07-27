import './style.css';

const searchInput = document.querySelector('.header__search');
const searchButton = document.querySelector('.search-btn');
const mainTitle = document.querySelector('.main__title');
const recipesListEl = document.querySelector('.recipe-list');
const recipesContainer = document.querySelector('.recipes');
const headerLogoBtn = document.querySelector('.header-logo-btn');

const recipeInfos = document.querySelector('.recipe-infos');
const recipeInfosTitle = document.querySelector('.recipe-infos__title');
const recipeInfosImg = document.querySelector('.recipe-infos__img');
const recipeInfosIgredients = document.querySelector(
  '.recipe-infos__ingredients-list',
);
const recipeInfosInstructions = document.querySelector(
  '.recipe-infos__instructions',
);
const getBackBtnEl = document.querySelector('.get-back-btn');

const fetchRecipe = async (recipeSearch) => {
  const endpoint = (
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeSearch}`
  );
  const response = await fetch(endpoint);
  const { meals } = await response.json();
  return meals;
};

const addIgredientsEl = (igredientsArray) => {
  recipeInfosIgredients.textContent = '';
  igredientsArray.forEach((igredient) => {
    const li = document.createElement('li');
    li.textContent = igredient;
    recipeInfosIgredients.appendChild(li);
  });
};

const changeSectionsDisplay = () => {
  if (recipesContainer.style.display === 'none') {
    recipesContainer.style.display = 'flex';
    recipeInfos.style.display = 'none';
  } else {
    recipesContainer.style.display = 'none';
    recipeInfos.style.display = 'flex';
    window.scrollTo(0, 0);
  }
};

const displayRecipeInfos = (title, image, ingredients, instructions) => {
  recipeInfosTitle.textContent = title;
  recipeInfosImg.src = image;
  recipeInfosInstructions.textContent = instructions;
  addIgredientsEl(ingredients);
  changeSectionsDisplay();
};

const getIgredients = (recipeObj) => {
  const ingredients = [];
  for (let counter = 1; counter <= 20; counter += 1) {
    const igredient = recipeObj[`strIngredient${counter}`];
    const measure = recipeObj[`strMeasure${counter}`];
    if (!igredient || !measure) {
      break;
    }
    ingredients.push(`${measure} - ${igredient}`);
  }
  return ingredients;
};

const createRecipeCardEl = (recipeObj) => {
  const {
    strMeal, strCategory, strMealThumb, strInstructions,
  } = recipeObj;
  const igredients = getIgredients(recipeObj);
  const recipeCardContainerEl = document.createElement('li');
  recipeCardContainerEl.className = 'recipe-card';
  recipeCardContainerEl.addEventListener('click', () => {
    displayRecipeInfos(strMeal, strMealThumb, igredients, strInstructions);
  });

  const recipeImgEl = document.createElement('img');
  recipeImgEl.src = strMealThumb;
  recipeImgEl.className = 'recipe-card__img';
  recipeCardContainerEl.appendChild(recipeImgEl);

  const categorySpanEl = document.createElement('span');
  categorySpanEl.textContent = strCategory;
  categorySpanEl.className = 'recipe-card__category';
  recipeCardContainerEl.appendChild(categorySpanEl);

  const recipeTitleEl = document.createElement('h2');
  recipeTitleEl.textContent = strMeal;
  recipeTitleEl.className = 'recipe-card__title';
  recipeCardContainerEl.appendChild(recipeTitleEl);

  return recipeCardContainerEl;
};

const clearRecipes = () => {
  recipesListEl.textContent = '';
};

const renderRecipeCards = (recipesArray) => {
  recipesArray.forEach((recipeObj) => {
    const recipeCardEl = createRecipeCardEl(recipeObj);
    recipesListEl.appendChild(recipeCardEl);
  });
};

const refreshMainTitle = (text) => {
  mainTitle.textContent = text;
};

const garanteeRightPage = () => {
  if (recipesContainer.style.display === 'none') {
    changeSectionsDisplay();
  }
};

const renderSearchResult = async (keyword) => {
  const recipes = await fetchRecipe(keyword);
  if (recipes === null) {
    refreshMainTitle('Nenhum resultado encontrado! :(');
  } else {
    refreshMainTitle(`Resultados para a busca: "${keyword}"`);
    renderRecipeCards(recipes);
  }
  garanteeRightPage();
};

const searchRecipe = async (keyword) => {
  clearRecipes();
  refreshMainTitle('Carregando...');
  try {
    await renderSearchResult(keyword);
  } catch {
    refreshMainTitle(
      'Oops! Ocorreu algum erro. Recarregue ou tente mais tarde.',
    );
  }
};

searchButton.addEventListener('click', () => {
  const keyword = searchInput.value;
  if (keyword.replaceAll(' ', '') !== '') {
    searchRecipe(keyword);
    searchInput.value = '';
  }
});

const renderInitialRecipes = async () => {
  try {
    clearRecipes();
    refreshMainTitle('Carregando...');
    const recipes = await fetchRecipe('');
    refreshMainTitle('Explore ou busque nossas receitas!');
    renderRecipeCards(recipes);
    garanteeRightPage();
  } catch {
    refreshMainTitle(
      'Oops! Ocorreu algum erro. Recarregue ou tente mais tarde.',
    );
  }
};

getBackBtnEl.addEventListener('click', changeSectionsDisplay);

headerLogoBtn.addEventListener('click', renderInitialRecipes);

window.onload = () => {
  renderInitialRecipes();
};
