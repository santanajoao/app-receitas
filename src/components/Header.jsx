import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import recipeBookImage from '../assets/recipe-book.png';
import searchImage from '../assets/search.png';
import '../styles/Header.css';

export default function Header({ history }) {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleInputChange = ({ target }) => {
    const { value } = target;
    setSearchKeyword(value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchKeyword.replace(/ /g, '')) {
      history.push(`/search/${searchKeyword}`);
    }
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
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
