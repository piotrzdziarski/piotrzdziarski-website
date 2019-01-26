import React from 'react';
import GlobalStyles from "../components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";
import Canvas from "../canvas/Canvas";
import Router from "../Router";

const MainLayout = () => (
    <>
        <GlobalStyles/>
        <Canvas/>

        <ThemeProvider theme={ theme }>
            <Router/>
        </ThemeProvider>
    </>
);

export default MainLayout;