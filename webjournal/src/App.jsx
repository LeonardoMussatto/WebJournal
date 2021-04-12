import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeContext, theme } from './Theme/theme';
import Landing from './Pages/Landing';
import Article from './Pages/Article';

const App = () => {
  return (
    <Switch>
      <Route path="/article">
        <ThemeContext.Provider value={theme}>
          <Article />
        </ThemeContext.Provider>
      </Route>
      <Route path="/">
        <ThemeContext.Provider value={theme}>
          <Landing />
        </ThemeContext.Provider>
      </Route>
    </Switch>
  );
};

export default App;
