import React, { useState, useEffect } from 'react';
import { fetchByRecipeName } from '../utils/requestAPI';
import Header from '../components/Header';
import Messages from '../components/Messages';
import ResultList from '../components/ResultList';
import '../styles/SearchPage.css';

export default function SearchPage({ history }) {
  const [searchData, setSearchData] = useState({
    searchKeyword: '',
    searchResult: [],
    isLoading: true,
  });

  const { isLoading, searchResult, searchKeyword } = searchData;

  useEffect(() => {
    handleSearch();
  }, [searchKeyword])

  const handleSearch = async () => {
    setSearchData((prevState) => ({ ...prevState, isLoading: true }));

    const meals = await fetchByRecipeName(searchKeyword);

    setSearchData((prevState) => ({
      ...prevState,
      searchResult: meals,
      isLoading: false,
    }));
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
