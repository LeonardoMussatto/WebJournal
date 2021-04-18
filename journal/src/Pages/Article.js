import React, { useContext } from 'react';
import { ThemeContext } from '../Utilities/theme';
import { useLocation } from 'react-router-dom';
import { useGetArticle } from '../Utilities/useGetArticle';
import Text from '../Components/Text';
import Title from '../Components/Title';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Article = () => {
  let theme = useContext(ThemeContext);
  let location = useLocation();
  let target = location.hash.substring(1);
  const targetArticle = useGetArticle(target);
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
  return (
    <div style={page}>
      <Header />
      {targetArticle ? (
        <main style={main}>
          <Title target={targetArticle[target - 1].head} />
          <Text target={targetArticle[target - 1].body} />
        </main>
      ) : (
        <h3 style={{ ...theme.text.title.h3 }}>
          Oops ... Houston, we've had a problem here.
        </h3>
      )}
      <Footer />
    </div>
  );
};

export default Article;
