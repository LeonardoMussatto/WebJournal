import React, { useContext } from 'react';
import { ThemeContext } from '../Utilities/theme';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Preview from '../Components/Preview'
import LatestArticles from '../Media/TestArticleDB.json';

const Landing = () => {
  let theme = useContext(ThemeContext);
  let page = {
    ...theme.page,
    display: 'grid',
    gridTemplateColumns: '90vw',
    gridTemplateRows:
      'minmax(min-content, 50px) minmax(20vh, auto) minmax(min-content, 30vh)',
    placeContent: 'start center',
    rowGap: '5vh',
  };
  let main = {
    marginLeft: '3%',
    placeSelf: 'center center',
    display: 'grid',
    width: '90%',
    gridTemplateColumns: '0.5fr 1fr 0.5fr',
  };

  return (
    <div style={page}>
      <Header />
      <main style={main}>
        {LatestArticles ? <Preview articles={LatestArticles}/> : <h3 style={{ ...theme.text.title.h3 }}>Oops ... Houston, we've had a problem here</h3>}
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
