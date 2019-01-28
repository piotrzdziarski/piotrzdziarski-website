import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body,html {
    padding: 0;
    margin: 0;
    font-family: "Montserrat", sans-serif;
     ${ ({theme}) => theme.media.tablet} {
      overflow: hidden;
     }
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
`;


class GlobalStyles extends Component {
    render() {
        return (
            <GlobalStyle/>
        );
    }
}

export default GlobalStyles;