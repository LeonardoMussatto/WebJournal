import React, { useContext } from 'react';
import Card from '../Components/Card';
import { ThemeContext } from '../Theme/theme';
import TestArticles from '../Media/TestArticleDB.json';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Landing = () => {
  let theme = useContext(ThemeContext);
  let page = {
    ...theme.page,
    display: 'grid',
    gridTemplateColumns: '90vw',
    gridTemplateRows:
      'min-max(min-content, 50px) auto min-max(min-content, 30vh)',
    placeContent: 'start center',
    rowGap: '10vh',
  };
  let main = {
    placeSelf: 'center center',
    display: 'grid',
    width: '90%',
    gridTemplateColumns: '0.5fr 1fr 0.5fr',
  };
  let column = {
    width: '90%',
    paddingTop: '5vh',
    paddingBottom: '5vh',
    display: 'grid',
    gridTemplateRows: 'auto-fill',
    rowGap: '5vh'
  };
  let central = {
    width: '90%',
    paddingTop: '5vh',
    paddingBottom: '5vh',
    display: 'grid',
    gridTemplateRows: 'auto-fill',
    borderLeft: '0.5px solid #000000',
    borderRight: '0.5px solid #000000',
    rowGap: '5vh'
  }
  return (
    <div style={page}>
      <Header />
      <main style={main}>
        <div style={column}>
          {TestArticles.slice(2,4).map((article) => (
            <Card key={article.id} target={article} />
          ))}
        </div>
        <div style={central}>
          {TestArticles.slice(0,2).map((article) => (
            <Card key={article.id} target={article} />
          ))}
        </div>
        <div style={column}>
          {TestArticles.slice(4,6).map((article) => (
            <Card key={article.id} target={article} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
