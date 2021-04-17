import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Utilities/theme';

const Card = (props) => {
  let theme = useContext(ThemeContext);
  let article = props.target.head;
  let card = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: props.column ? 'flex-start' : 'center',
    textDecoration: 'none',
    color: theme.page.color,
  };
  let main = props.column
    ? {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: '5%',
      }
    : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      };
  let hr = {
    width: props.column ? '100% ' : '90%',
    marginTop: '5vh',
    marginLeft: props.column ? '0%' : 'auto',
  };

  return (
    <Link to={`/article#${props.target.id}`} style={card}>
      <div style={main}>
        {article.img && <img src={article.src} alt={article.alt} width="60%" />}
        <h1
          style={
            props.column
              ? { ...theme.text.title.h2 }
              : { ...theme.text.title.h1 }
          }
        >
          {article.title}
        </h1>
        <p
          style={
            props.column
              ? { ...theme.text.subtitle.s2 }
              : { ...theme.text.subtitle.s1 }
          }
        >
          {article.preview}
        </p>
        <p style={{ ...theme.text.attribution }}>
          {article.date} - {article.author}
        </p>
      </div>
      <hr style={hr} />
    </Link>
  );
};

export default Card;
