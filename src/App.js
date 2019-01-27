import React, { Component } from 'react';
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThemeProvider theme={ theme }>
                <MainLayout/>
            </ThemeProvider>
        );
    }
}

export default App;
