import React from 'react';

export const theme = {
  text: {
    header:{
        fontFamily: "freight-big-pro, serif",
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: "4.768rem"
    },
    subtitle: {
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: "0.8rem",
        lineHeight: "1.1875rem"
    },
    body: {
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: "1.125rem",
        lineHeight: "2.5rem",
        textAlign: "justify",
        textJustify: "auto"
    },
    attribution:{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "300",
        fontStyle: "normal",
        fontSize: "0.64rem",
    }
  },
  page: {
      color: "#000000",
      backgroundColor: "#FBFBF9",
      boxSizing:  "border-box",
      scrollbarWidth:  "thin",
  }
};

theme.text.title = {
    h1: {
        ...theme.text.header,
        fontSize: "1.953rem"
    },
    h2: {
        ...theme.text.header,
        fontSize: "1.563rem"
    },
    h3: {
        ...theme.text.header,
        fontSize: "1.25rem"
    },
    h4: {
        ...theme.text.header,
        fontSize: "1rem"
    }
}

export const ThemeContext = React.createContext(theme);
