import { Popping, Pop } from "../src/components/utils/Popping";
import React from 'react';

test('Test retrieve single popping character', () => {
    const popping = new Popping();
    expect(popping.getPoppingCharacter('H', 0)).toEqual(
        <Pop index={0} key={0}>H</Pop>
    );
});


test('Test single JSX Text', () => {
    const text = 'Text';
    const popping = new Popping();
    const JSXArrayFromText = popping.getPoppingJSXFromText(text);

    const testedArray = [];
    for (let i = 0; i < text.length; i++) {
        testedArray.push(
            popping.getPoppingCharacter(text.charAt(i), i)
        );
    }

    expect(JSXArrayFromText).toEqual(testedArray);
});