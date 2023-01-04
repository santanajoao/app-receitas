import React from 'react';
import SearchPage from './pages/SearchPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
}
