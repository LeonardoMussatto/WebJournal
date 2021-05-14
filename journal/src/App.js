import { Switch, Route } from 'react-router-dom';
import { ThemeContext, theme } from './Utilities/theme';
import Article from './Pages/Article';
import Authors from './Pages/Authors';
import Landing from './Pages/Landing';
import Author from './Pages/Author';

function App() {
  return (
    <Switch>
      <Route path="/article">
        <ThemeContext.Provider value={theme}>
          <Article />
        </ThemeContext.Provider>
      </Route>
      <Route path="/author">
        <ThemeContext.Provider value={theme}>
          <Author />
        </ThemeContext.Provider>
      </Route>
      <Route path="/Authors">
        <ThemeContext.Provider value={theme}>
          <Authors />
        </ThemeContext.Provider>
      </Route>
      <Route path="/">
        <ThemeContext.Provider value={theme}>
          <Landing />
        </ThemeContext.Provider>
      </Route>
    </Switch>
  );
}

export default App;
