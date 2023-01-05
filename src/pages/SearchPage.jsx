import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Messages from '../components/Messages';
import ResultList from '../components/ResultList';
import '../styles/SearchPage.css';

export default function SearchPage() {
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

    const endpoint = (
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKeyword}`
    );
    const response = await fetch(endpoint);
    const { meals } = await response.json();
    
    setSearchData((prevState) => ({
      ...prevState,
      searchResult: meals,
      isLoading: false,
    }));
  };

  const updateFromStorage = (storageName) => {
    const value = localStorage.getItem(storageName);
    setSearchData((prevState) => ({
      ...prevState,
      [storageName]: value,
    }));
  };

  return (
    <div className="SearchPage">
      <Header informUpdate={updateFromStorage} />
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
