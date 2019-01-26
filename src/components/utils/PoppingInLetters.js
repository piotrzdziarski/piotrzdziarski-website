import React from 'react';
import { Popping } from "./Popping";

const PoppingInLetters = ({ children }) => {
    const popping = new Popping(children);
    const poppingJSX = (
        popping.getPoppingJSX()
    );
    return poppingJSX;
};

export default PoppingInLetters;