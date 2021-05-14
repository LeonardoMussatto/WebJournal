import React from 'react';
import { ReactComponent as Facebook } from '../Media/Social/facebook.svg';
import { ReactComponent as Instagram } from '../Media/Social/instagram.svg';
import { ReactComponent as Gmail } from '../Media/Social/gmail.svg';
// import { Link } from 'react-router-dom';

const Social = (props) => {
  let links = props.target;
  let flex = {
    paddingTop: '5%',
    display: 'flex',
    justifyItems: 'space around',
    placeItems: 'center center',
    gap: '5vw',
    placeContent: 'center center',
  };

  return (
    <div style={flex}>
      {links.instagram && <Instagram width="6%" />}
      {links.facebook && <Facebook width="6%" />}
      {links.email && <Gmail width="6%" />}
    </div>
  );
};

export default Social;
