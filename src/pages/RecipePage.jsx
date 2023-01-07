import React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchByRecipeID } from '../utils/requestAPI';
import Header from '../components/Header';
import Loading from '../components/Loading';
import RecipeInfos from '../components/RecipeInfos';
import '../styles/RecipePage.css';

export default function RecipePage({ match, history }) {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const { id } = match.params;
    const recipeInfos = await fetchByRecipeID(id);
    setRecipe(recipeInfos);
    setIsLoading(false);
  };

  return (
    <div className="RecipePage">
      <Header history={history} />
      <main className="RecipePage__main">
        {isLoading ? (
          <Loading />
        ) : (
          <RecipeInfos recipeInfos={recipe} history={history} />
        )}
      </main>
    </div>
  );
}

RecipePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};
