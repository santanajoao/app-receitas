import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/RecipeCard.css';

export default function RecipeCard({ recipeInfos }) {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipeInfos;
  return (
    <li key={idMeal} className="RecipeCard">
      <Link to={`/recipe/${idMeal}`} className="RecipeCard__Link">
        <img
          src={strMealThumb}
          className="RecipeCard__picture"
          alt={`Foto de um(a) ${strMeal}`}
        />
        <span className="RecipeCard__category">{strCategory}</span>
        <h3 className="RecipeCard__title">{strMeal}</h3>
      </Link>
    </li>
  );
}

RecipeCard.propTypes = {
  recipeInfos: PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
};
