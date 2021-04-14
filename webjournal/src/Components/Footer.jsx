import React, { useContext } from 'react';
import { ThemeContext } from '../Theme/theme';
import Facebook from '../Media/Social/facebook.svgr.svg';
import Instagram from '../Media/Social/instagram.svgr.svg';
import Whatsapp from '../Media/Social/whatsapp.svgr.svg';
import Gmail from '../Media/Social/gmail.svgr.svg';

const Footer = () => {
  let theme = useContext(ThemeContext);
  let footer = {
    placeSelf: 'center center',
    width: '95%',
    display: 'grid',
    girdTemplateRows: '10% 90%',
    gridTemplateColumns:
      'minmax(min-content, 0.3fr) minmax(min-content, 1fr) minmax(min-content, 0.7fr)',
    gridTemplateAreas: `
        "line line line"
        "logo links social"`,
    placeItems: 'center center',
    rowGap: '5vh',
    paddingTop: '10vh',
    paddingBottom: '5vh',
  };
  let flex = {
    display: 'flex',
    justifyItems: 'space around',
    placeItems: 'center center',
    gap: '5vw',
  };
  let text = {
    ...theme.text.title.h1,
    placeSelf: 'center center',
  };
  let hr = {
    gridArea: 'line',
    width: '100%',
    borderTop: '0.5px solid #000000',
    placeSelf: 'start center',
  };
  return (
    <footer style={footer}>
      <hr style={hr} />
      <p style={text}>La Voce</p>
      <div style={flex}>
        <p style={{ ...theme.text.title.h3 }}>Categories</p>
        <p style={{ ...theme.text.title.h3 }}>Authors</p>
        <p style={{ ...theme.text.title.h3 }}>About</p>
      </div>
      <div style={flex}>
        <Whatsapp width="9%" />
        <Instagram width="9%" />
        <Facebook width="9%" />
        <Gmail width="9%" />
      </div>
    </footer>
  );
};

export default Footer;
