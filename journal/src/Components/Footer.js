import React, { useContext } from "react";
import { ThemeContext } from "../Utilities/theme";
import { ReactComponent as Facebook } from "../Media/Social/facebook.svg";
import { ReactComponent as Instagram } from "../Media/Social/instagram.svg";
import { ReactComponent as Whatsapp } from "../Media/Social/whatsapp.svg";
import { ReactComponent as Gmail } from "../Media/Social/gmail.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  let theme = useContext(ThemeContext);
  let footer = {
    placeSelf: "center center",
    width: "95%",
    display: "grid",
    girdTemplateRows: "10% 90%",
    gridTemplateColumns:
      "minmax(min-content, 0.3fr) minmax(min-content, 1fr) minmax(min-content, 0.7fr)",
    gridTemplateAreas: `
        "line line line"
        "logo links social"`,
    placeItems: "center center",
    rowGap: "5vh",
    paddingTop: "10vh",
    paddingBottom: "5vh",
  };
  let flex = {
    display: "flex",
    justifyItems: "space around",
    placeItems: "center center",
    gap: "5vw",
  };
  let text = {
    ...theme.text.title.h1,
    placeSelf: "center center",
  };
  let hr = {
    gridArea: "line",
    width: "100%",
    borderTop: "0.5px solid #000000",
    placeSelf: "start center",
  };
  return (
    <footer style={footer}>
      <hr style={hr} />
      <Link to="/" style={text}>
        La Voce
      </Link>
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
