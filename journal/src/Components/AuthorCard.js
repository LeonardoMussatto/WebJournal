import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Utilities/theme';

const AuthorCard = (props) => {
  let theme = useContext(ThemeContext);
  let author = props.target.head;

  let card = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2%',
    maxWidth: '30vw',
    height: 'max-content',
    textDecoration: 'none',
    color: theme.page.color,
  };
  let main = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  return (
    <Link to={`/author#${author.name.replace(/\s+/g, '')}`} style={card}>
      <img src={author.img} alt="" width="50%" />
      <main style={main}>
        <p style={{ ...theme.text.title.h2, margin: '0%' }}>{author.name}</p>
        <p style={{ ...theme.text.attribution }}>{author.title}</p>
        <p style={{ ...theme.text.subtitle.s2, marginTop: '1.5%' }}>
          {author.preview}
        </p>
      </main>
    </Link>
  );
};

export default AuthorCard;
