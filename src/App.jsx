import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import RecipePage from './pages/RecipePage';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/recipe/:id" component={RecipePage} />
        <Route path="/search/:keyword" component={SearchPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
