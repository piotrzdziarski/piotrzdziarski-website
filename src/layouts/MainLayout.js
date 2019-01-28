import React from 'react';
import GlobalStyles from "../components/GlobalStyles";
import Canvas from "../canvas/components/Canvas";
import Router from "../Router";

const MainLayout = () => (
    <>
        <GlobalStyles/>
        <Canvas/>
        <Router/>
    </>
);

export default MainLayout;