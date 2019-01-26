import React from 'react';
import { Popping } from "./Popping";


const PoppingInText = ({ children }) => {

    const popping = new Popping();
    return popping.getPoppingJSX(children);
};


export default PoppingInText;