import React from 'react';
import RecipeCard from './RecipeCard';
import '../styles/ResultList.css';

export default function ResultList({ searchResult }) { 
  return (
    <>
      <h2 className="ResultList__title">Explore ou busque nossas receitas!</h2>
      <ul className="ResultList">
        {searchResult.map((recipeInfos) => (
          <RecipeCard key={recipeInfos.idMeal} recipeInfos={recipeInfos} />
        ))}
      </ul>
    </>
  );
}
