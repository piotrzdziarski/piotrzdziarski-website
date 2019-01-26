import styled, { keyframes } from 'styled-components';
import React from 'react';

const PopIn = keyframes`
  0% {
    transform: scale(.6);
    opacity: 0;
  }
  
  50% {
    transform: scale(1.4);
  }
  
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;


export const Pop = styled.span`
  opacity: 0;
  display: inline-block;
  animation: ${ PopIn } .4s forwards;
  animation-delay: ${ (props) => props.index * .04 + 's' };
`;


export class Popping {

    #poppingJSX = [];
    #xd = ["1454", ["2312312"]];

    getPoppingJSX(jsx) {
        this.recursiveReplacingToPoppingJSX(jsx, 0);
        return this.#poppingJSX;
    }


    recursiveReplacingToPoppingJSX(jsx, deepLevel) {
        if (typeof jsx === "string") {
            jsx = this.getPoppingArrayFromText(jsx);
            return;
        }

        jsx.forEach((child) => {
            if (typeof child === "string") {
                child = this.getPoppingArrayFromText(child);
                return;
            }
            this.recursiveReplacingToPoppingJSX(child.props.children);
        });
    }


    getPoppingArrayFromText(text) {
        const poppingArray = [];
        for (let i = 0; i < text.length; i++) {
            poppingArray.push(this.getPoppingCharacter(text.charAt(i), i))
        }
        return poppingArray;
    }


    getPoppingCharacter(letter, key) {
        if (letter === ' ') letter = `\u00A0`;
        return (<Pop index={ key } key={ key }>{ letter }</Pop>);
    }
}