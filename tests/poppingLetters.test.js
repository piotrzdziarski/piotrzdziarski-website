import { Popping, Pop } from "../src/components/utils/Popping";
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import styled from 'styled-components';

const renderer = new ShallowRenderer();
const Example = styled.div`
  color: black;
`;


const getJSXToTest = (JSX) => {
    const rendered = renderer.render(<Example>{JSX}</Example>);
    return rendered.props.children;
};


test('Test retrieve single popping character', () => {
    const popping = new Popping();
    expect(popping.getPoppingCharacter('H', 0)).toEqual(
        <Pop index={0} key={0}>H</Pop>
    );
});


test('Test single JSX Text', () => {
    const text = 'Text';
    const popping = new Popping();
    const JSXArrayFromText = popping.getPoppingArrayFromText(text);

    const testedArray = [];
    for (let i = 0; i < text.length; i++) {
        testedArray.push(
            popping.getPoppingCharacter(text.charAt(i), i)
        );
    }

    expect(JSXArrayFromText).toEqual(testedArray);
});


test('Test complex JSX', () => {
    const JSXToPop = getJSXToTest(
        <Example>
            Hello I'm a <Example>really <Example>complex example.</Example></Example>
        </Example>
    );
});