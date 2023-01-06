import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import { fetchRandomRecipe } from '../utils/requestAPI';
import RecipeCard from '../components/RecipeCard';
import recipeBook from '../assets/open-recipe-book.png';
import '../styles/HomePage.css';

export default function HomePage({ history }) {
  const [randomRecipes, setRandomRecipes] = useState([]);

  useEffect(() => {
    getRandomRecipes();
  }, []);

  const getRandomRecipes = async () => {
    const recipes = await Promise.all(
      [fetchRandomRecipe(), fetchRandomRecipe()]
    );
    setRandomRecipes(recipes);
  };

  return (
    <div className="HomePage">
      <Header history={history} />
      <main className="HomePage__main">
        <section className="HomePage__left">
          <h2 className="HomePage__title">Explore nossas diversas receitas!</h2>
          <div className="img-wrapper">
            <img
              src={recipeBook}
              className="HomePage__img"
              alt="Livro de receitas aberto"
            />
          </div>
        </section>

        <section className="HomePage__right">
          <h2 className="HomePage__title">
            Receitas que você talvez se interesse:
          </h2>

          { randomRecipes.length > 0 && (
            <ul className="random-recipes-list">
              {randomRecipes.map((recipeInfos) => (
                <RecipeCard recipeInfos={recipeInfos} />
              ))}
            </ul>
          ) }
        </section>
      </main>
    </div>
  )
}
