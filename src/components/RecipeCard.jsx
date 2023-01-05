import React from 'react';
import { Link } from 'react-router-dom';
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
