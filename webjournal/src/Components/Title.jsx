import React, { useContext } from 'react';
import { ThemeContext } from '../Theme/theme';

const Title = (props) => {
  let theme = useContext(ThemeContext);
  let title = {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    gap: '2vh',
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
        <img src={props.target.src} alt={props.target.alt} width="60%" />
        <h1 style={{ ...theme.text.title.h1 }}>{props.target.title}</h1>
      </div>
      <p style={{ ...theme.text.title.h3 }}>{props.target.author}</p>
    </section>
  );
};

export default Title;
