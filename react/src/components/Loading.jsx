import React from 'react';
import loadingIcon from '../assets/beater.png';
import '../styles/Loading.css';

export default function Loading() {
  return (
    <div className="Loading">
      <img src={loadingIcon} className="Loading__icon" alt="Batedor de cozinha" />
    </div>
  );
}
