import React from 'react';
import PropTypes from 'prop-types';
import leftArrow from '../assets/left-arrow.png';
import '../styles/RecipeInfos.css';

export default function RecipeInfos({ recipeInfos, history }) {
  const {
    strMeal, strCategory, strInstructions, strMealThumb, ingredients,
  } = recipeInfos;

  return (
    <>
      <div className="RecipePage__btn-n-category">
        <button
          onClick={ () => history.goBack() }
          className="RecipePage__get-back-btn"
          type="button"
        >
          <img
            src={leftArrow}
            className="RecipePage__btn-icon"
            alt="Ícone do botão de voltar atrás"
          />
        </button>
        <span className="RecipePage__category">{strCategory}</span>
      </div>

      <h2 className="RecipePage__main-title">{ strMeal }</h2>
      <div className="RecipePage__picture-n-ingredients">
        <img
          className="RecipePage__picture"
          src={strMealThumb}
          alt={`Imagem de um(a) ${strMeal}`}
        />

        <div>
          <h3 className="RecipePage__ingredients-title">Igredientes</h3>
          <ul className="RecipePage__ingredients-list">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="RecipePage__instructions-title">Como preparar</h3>
      <p className="RecipePage__instructions">{ strInstructions }</p>
    </>
  );
}

RecipeInfos.propTypes = {
  recipeInfos: PropTypes.shape({
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    strMealThumb: PropTypes.string,
    ingredients: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};
