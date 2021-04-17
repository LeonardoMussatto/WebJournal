import React, { useContext } from 'react';
import { ThemeContext } from '../Utilities/theme';

const Text = (props) => {
  let theme = useContext(ThemeContext);
  let body = {
    ...theme.text.body,
    width: '80%',
    whiteSpace: 'pre-line',
  };
  return <article style={body}>{props.target}</article>;
};

export default Text;
