import React, { useContext } from 'react';
import { ThemeContext } from '../Utilities/theme';
import { Link } from 'react-router-dom';

const Title = (props) => {
  let theme = useContext(ThemeContext);
  let title = {
    display: 'grid',
    gridTemplateColumns: '0.5fr 1fr 0.5fr',
    gridTemplateRows: 'auto-fill',
    placeItems: 'center center',
    gap: '2vh',
    width: '80vw',
  };
  let main = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2vh',
  };
  return (
    <section style={title}>
      <p style={{ ...theme.text.title.h3 }}>{props.target.date}</p>
      <div style={main}>
        <img src={props.target.src} alt={props.target.alt} width="80%" />
        <h1 style={{ ...theme.text.title.h1 }}>{props.target.title}</h1>
      </div>
      <Link
        to={`/author#${props.target.author.replace(/\s+/g, '')}`}
        style={{
          ...theme.text.title.h3,
          textDecoration: 'none',
          color: theme.page.color,
        }}
      >
        {props.target.author}
      </Link>
    </section>
  );
};

export default Title;
