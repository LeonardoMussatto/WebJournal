import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../Theme/theme';
import { useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Title from '../Components/Title';
import Text from '../Components/Text';
import TestArticle from '../Media/TestArticleDB.json';

const Article = (props) => {
  let theme = useContext(ThemeContext);
  let location = useLocation();
  const [Article, setArticle] = useState(TestArticle[0]);
  let page = {
    ...theme.page,
    display: 'grid',
    gridTemplateColumns: '100vw',
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
    setArticle(TestArticle.find((x) => x.id == target));
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
