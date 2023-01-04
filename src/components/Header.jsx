import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import recipeBookImage from '../assets/recipe-book.png';
import searchImage from '../assets/search.png';
import '../styles/Header.css';

export default function Header() {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = ({ target }) => {
    const { value } = target;
    setSearchValue(value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('recipeSearch', JSON.stringify(searchValue));
    setSearchValue('');
  };

  return (
    <div className="Header">
      <div className="Header__logo-n-title">
        <Link to="/">
          <img
            src={recipeBookImage}
            className="Header__logo"
            alt="Livro de receitas"
          />
        </Link>
        <h1 className="Header__title">Site de Receitas</h1>
      </div>
      <form onSubmit={handleSearchSubmit} className="Header__form">
        <input
          value={searchValue}
          type="text"
          placeholder="Encontre sua receita"
          onChange={handleInputChange}
          name="searchValue"
          className="search-input"
        />
        <button type="submit" className="search-btn">
          <img
            src={searchImage}
            className="search-img"
            alt="Lupa de pesquisa"
          />
        </button>
      </form>
    </div>
  );
}
