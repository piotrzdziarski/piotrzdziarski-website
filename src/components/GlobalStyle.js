import React, {PureComponent} from 'react';
import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
html  {
width: 100%;
height: 100%;
margin: 0;
}
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-size: 42px;
    height: 100%;
    width: 100%;
  }
  
  *, *::before, *::after {
  -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }
`;

class GlobalStyle extends PureComponent {
    render() {
        return (
            <GlobalStyles/>
        );
    }
}


export default GlobalStyle;