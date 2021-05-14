import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../Utilities/theme';
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Social from '../Components/Social';
import Card from '../Components/Card';
import Text from '../Components/Text';
import AuthorsDB from '../Media/TestAuthorsDB.json';
import ArticlesDB from '../Media/TestArticleDB.json';

const Author = () => {
  let theme = useContext(ThemeContext);
  let location = useLocation();
  const [Author, setAuthor] = useState(AuthorsDB[0]);
  let articles = Author.articles.map((id) =>
    ArticlesDB.find((article) => article.id === id),
  );

  let page = { ...theme.page, rowGap: '3vh' };
  let main = {
    width: '90%',
    placeSelf: 'center center',
    display: 'grid',
    gridTemplateColumns: '1fr 0.5fr',
    gridTemplateRows: '40vh auto',
    gridTemplateAreas: `
      'head head'
      'body aside'`,
    rowGap: '3vh',
  };
  let head = {
    gridArea: 'head',
    justifySelf: 'center',
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // gap: '10%',
  };
  let title = {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '10%',
  };
  let body = {
    gridArea: 'body',
  };
  let aside = {
    gridArea: 'aside',
    display: 'flex',
    flexDirection: 'column',
    placeContent: 'start start',
    padding: '0 10% 0 0',
    overflowY: 'auto',
    overflowX: 'clip',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'thin',
  };

  useEffect(() => {
    let target = location.hash.substring(1);
    setAuthor(
      AuthorsDB.find((x) => x.head.name.replace(/\s+/g, '') === target),
    );
  }, [location.hash]);

  return (
    <div style={page}>
      <Header />
      <main style={main}>
        <div style={head}>
          <img src={Author.head.img} alt="" height="50%" />
          <div style={title}>
            <p style={{ ...theme.text.title.h1 }}>{Author.head.name}</p>
            {/* <p style={{ ...theme.text.subtitle.s2 }}>{Author.head.title}</p> */}
            <Social target={Author.links} />
          </div>
        </div>
        <Text style={body} target={Author.body} />
        <aside style={aside}>
          {articles.map((article) => (
            <Card key={article.id} target={article} column={true} img={false} />
          ))}
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export default Author;
