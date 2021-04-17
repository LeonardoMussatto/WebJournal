import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../Utilities/theme';
import { useLocation } from 'react-router-dom';
import Text from '../Components/Text';
import Title from '../Components/Title';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import TestArticles from '../Media/TestArticleDB.json';

const Article = () => {
  let theme = useContext(ThemeContext);
  let location = useLocation();
  const [Article, setArticle] = useState(TestArticles[0]);
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
    width: '70%',
    placeSelf: 'start center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10vh',
  };
  useEffect(() => {
    let target = location.hash.substring(1);
    setArticle(TestArticles.find((x) => x.id === target));
  }, [location.hash]);
  return (
    <div style={page}>
      <Header />
      <main style={main}>
        <Title target={Article.head} />
        <Text target={Article.body} />
      </main>
      <Footer />
    </div>
  );
};

export default Article;
