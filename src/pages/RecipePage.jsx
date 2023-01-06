import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';

export default function RecipePage({ match, history }) {
  useEffect(() => {

  }, []);

  const { id } = match.params;
  return (
    <div className="RecipePage">
      <Header history={history} />
      {id}
    </div>
  );
}
