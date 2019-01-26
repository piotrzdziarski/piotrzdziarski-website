import { Popping, Pop } from "../src/components/utils/Popping";
import renderer from 'react-test-renderer';
import React from 'react';

it('Test creating popping HTML', () => {
    const stringToPop = "Hey I'm here!";

    const popping = new Popping(stringToPop);
    const poppingHTML = popping.getPoppingJSX();


    const pop = renderer.create(
        <Pop></Pop>,
    );
});