import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import recipeBookImage from '../assets/recipe-book.png';
import searchImage from '../assets/search.png';
import '../styles/Header.css';

export default function Header({ informUpdate }) {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleInputChange = ({ target }) => {
    const { value } = target;
    setSearchKeyword(value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('searchKeyword', searchKeyword);
    setSearchKeyword('');
    informUpdate('searchKeyword');
  };

  const renderInitialRecipes = () => {
    localStorage.setItem('searchKeyword', '');
    setSearchKeyword('');
    informUpdate('searchKeyword');
  }

  return (
    <div className="Header">
      <div className="Header__logo-n-title">
        <button
          type="button"
          onClick={renderInitialRecipes} className="logo-btn"
        >
          <img
            src={recipeBookImage}
            className="Header__logo"
            alt="Livro de receitas"
          />
        </button>
        <h1 className="Header__title">Site de Receitas</h1>
      </div>
      <form onSubmit={handleSearchSubmit} className="Header__form">
        <input
          value={searchKeyword}
          type="text"
          placeholder="Encontre sua receita"
          onChange={handleInputChange}
          name="searchKeyword"
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

Header.propTypes = {
  informUpdate: PropTypes.func.isRequired,
};
