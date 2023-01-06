import React, { useState, useEffect } from 'react';
import { fetchByRecipeName } from '../utils/requestAPI';
import Header from '../components/Header';
import Messages from '../components/Messages';
import ResultList from '../components/ResultList';
import '../styles/SearchPage.css';

export default function SearchPage({ match, history }) {
  const [searchData, setSearchData] = useState({
    searchResult: [],
    isLoading: true,
  });

  const { isLoading, searchResult } = searchData;
  const { keyword } = match.params;
  

  useEffect(() => {
    handleSearch();
  }, [keyword])

  const handleSearch = async () => {

    setSearchData((prevState) => ({ ...prevState, isLoading: true }));

    const meals = await fetchByRecipeName(keyword);

    setSearchData({
      searchResult: meals,
      isLoading: false,
    });
  };

  return (
    <div className="SearchPage">
      <Header history={history} />
      <main className="SearchPage__main">
        { isLoading || searchResult === null ? (
          <Messages isLoading={isLoading} />
        ) : (
          <ResultList searchResult={searchResult} />
        ) }
      </main>
    </div>
  );
}
