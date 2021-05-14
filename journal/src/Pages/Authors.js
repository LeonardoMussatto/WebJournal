import React, { useContext } from 'react';
import { ThemeContext } from '../Utilities/theme';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Card from '../Components/AuthorCard';
import AuthorsDB from '../Media/TestAuthorsDB.json';

//ENHANCE implement "follow author" - new article notification

const Authors = () => {
  let theme = useContext(ThemeContext);
  let page = { ...theme.page, rowGap: '1vh' };
  let cards = {
    paddingTop: '10vh',
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: '10vh',
    columnGap: '10vw',
    placeContent: 'center center',
    justifyItems: 'space-between',
  };

  return (
    <div style={page}>
      <Header />
      <main>
        <div style={cards}>
          {AuthorsDB.map((author) => (
            <Card key={author.id} target={author} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Authors;
