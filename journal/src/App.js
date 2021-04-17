import { Switch, Route } from 'react-router-dom';
import { ThemeContext, theme } from './Utilities/theme';
import Article from './Pages/Article';
import Landing from './Pages/Landing';

function App() {
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
}

export default App;
