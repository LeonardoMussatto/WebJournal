import React from 'react';

export const theme = {
  text: {
    header: {
      fontFamily: 'freight-big-pro, serif',
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: '4.768rem',
    },
    subtitle: {
      s1: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '300',
        fontStyle: 'normal',
        fontSize: '1rem',
        lineHeight: '1.1875rem',
        textAlign: 'center',
        padding: '0 10%',
        marginTop: '0',
      },
      s2: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '300',
        fontStyle: 'normal',
        fontSize: '0.8rem',
        lineHeight: '1.1875rem',
        paddingRight: '10%',
        marginTop: '0',
        marginBottom: '0.5vh',
        // textAlign: 'justify',
        // textJustify: 'auto',
      },
    },
    body: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: '1.125rem',
      lineHeight: '2.5rem',
      textAlign: 'justify',
      textJustify: 'auto',
    },
    attribution: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '300',
      fontStyle: 'normal',
      fontSize: '0.64rem',
    },
  },
  page: {
    color: '#000000',
    backgroundColor: '#FBFBF9',
    boxSizing: 'border-box',
    scrollbarWidth: 'thin',
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '90vw',
    gridTemplateRows:
      'min-max(min-content, 50px) auto min-max(min-content, 30vh)',
    placeContent: 'start center',
    rowGap: '10vh',
  },
};

theme.text.title = {
  h1: {
    ...theme.text.header,
    fontSize: '1.953rem',
  },
  h2: {
    ...theme.text.header,
    fontSize: '1.563rem',
  },
  h3: {
    ...theme.text.header,
    fontSize: '1.25rem',
  },
  h4: {
    ...theme.text.header,
    fontSize: '1rem',
  },
};

export const ThemeContext = React.createContext(theme);
