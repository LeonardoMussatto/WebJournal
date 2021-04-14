import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Theme/theme';

const Header = () => {
  let theme = useContext(ThemeContext);
  let header = {
    width: '90vw',
    paddingTop: '5vh',
    placeSelf: 'center center',
    display: 'grid',
    gridTemplateColumns: '1fr minmax(max-content, 0.5fr) 1fr',
    color: theme.page.color,
    textDecoration: 'none',
  };
  let text = {
    ...theme.text.header,
    fontSize: '500%',
    placeSelf: 'center center',
  };
  let hrSx = {
    width: '90%',
    borderTop: '0.5px solid #000000',
    placeSelf: 'center end',
  };
  let hrDx = {
    width: '90%',
    borderTop: '0.5px solid #000000',
    placeSelf: 'center start',
  };
  return (
    <Link to="/" style={header}>
      <hr style={hrSx} />
      <header style={text}>La Voce</header>
      <hr style={hrDx} />
    </Link>
  );
};

export default Header;
