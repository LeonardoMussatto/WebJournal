import React, { useContext } from 'react';
import { ThemeContext } from '../Utilities/theme';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import LatestArticles from '../Media/TestArticleDB.json';

const Landing = () => {
  let theme = useContext(ThemeContext);
  let page = {
    ...theme.page,
    display: 'grid',
    gridTemplateColumns: '90vw',
    gridTemplateRows:
      'min-max(min-content, 50px) auto min-max(min-content, 30vh)',
    placeContent: 'start center',
    rowGap: '8vh',
  };
  let main = {
    marginLeft: '3%',
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
    gridTemplateRows: 'max-content',
    placeItems: 'start start',
    // rowGap: '1vh'
  };
  let central = {
    width: '90%',
    paddingTop: '5vh',
    paddingBottom: '5vh',
    display: 'grid',
    gridTemplateRows: 'auto-fill',
    borderLeft: '0.5px solid #000000',
    borderRight: '0.5px solid #000000',
    rowGap: '5vh',
  };

  return (
    <div style={page}>
      <Header />
      <main style={main}>
        <div style={column}>
          {LatestArticles.slice(2, 5).map((article) => (
            <Card key={article.id} target={article} column={true} />
          ))}
        </div>
        <div style={central}>
          {LatestArticles.slice(0, 2).map((article) => (
            <Card key={article.id} target={article} column={false} />
          ))}
        </div>
        <div style={column}>
          {LatestArticles.slice(5, 8).map((article) => (
            <Card key={article.id} target={article} column={true} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
