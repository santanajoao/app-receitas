import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import '../styles/Messages.css';

export default function Messages({ isLoading }) {
  if (isLoading) {
    return <Loading />;
  }
  return <p className="search-not-found">Nenhum resultado encontrado!</p>;
}

Messages.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
