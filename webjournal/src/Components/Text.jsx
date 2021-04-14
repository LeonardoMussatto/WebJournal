import React, { useContext } from 'react';
import { ThemeContext } from '../Theme/theme';

const Article = (props) => {
  let theme = useContext(ThemeContext);
  let body = {
    ...theme.text.body,
    width: '80%',
    whiteSpace: 'pre-line',
  };
  return <article style={body}>{props.target}</article>;
};

export default Article;
