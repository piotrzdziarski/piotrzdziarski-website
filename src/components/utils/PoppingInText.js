import React from 'react';
import { Popping } from "./Popping";


const PoppingInText = (props) => {
    const popping = new Popping();
    popping.setDelayIfGiven(props.delay);
    return popping.getPoppingJSXFromText(props.children);
};


export default PoppingInText;