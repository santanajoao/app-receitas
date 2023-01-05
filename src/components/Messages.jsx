import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Messages.css';

export default function Messages({ isLoading }) {
  if (isLoading) {
    return <span className="loading">Carregando...</span>;
  }
  return <p className="search-not-found">Nenhum resultado encontrado!</p>;
}

Messages.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
