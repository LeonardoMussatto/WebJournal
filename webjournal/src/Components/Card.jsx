import React, { useContext } from 'react';
import { ThemeContext } from '../Theme/theme';
import { Link } from "react-router-dom"

const Card = (props) => {
  let theme = useContext(ThemeContext);
  let article = props.target.head
  let card = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  }
  let hr = {
    width: "80%",
    marginTop: '5vh'
}
  return (
    <Link to={`/article#${props.target.id}`} style={card}>
      <img src={article.src} alt={article.alt} width="60%" />
      <h1 style={{...theme.text.title.h2}}>{article.title}</h1>
      <p style={{...theme.text.subtitle}}>{article.preview}</p>
      <p style={{...theme.text.attribution}}>{article.date} - {article.author}</p>
      <hr style={hr}/>
    </Link>
  );
};

export default Card;
