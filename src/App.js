import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/GlobalStyle';
import Router from './Router';
import { theme } from "./utils/theme";

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyles/>
                <ThemeProvider theme={theme}>
                    <Router/>
                </ThemeProvider>
            </>
        );
    }
}

export default App;
