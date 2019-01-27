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
  animation: ${ PopIn } .3s forwards;
  animation-delay: ${ (props) => props.index * .04 + 's' };
`;


export class Popping {

    #startNumber = 0;

    setDelayIfGiven(delay) {
        if (typeof delay !== "undefined")
            this.#startNumber = delay;
    }

    getPoppingJSXFromText(text) {
        const poppingArray = [];
        for (let i = this.#startNumber; i < this.#startNumber + text.length; i++) {
            poppingArray.push(this.getPoppingCharacter(text.charAt(i - this.#startNumber), i))
        }
        return poppingArray;
    }


    getPoppingCharacter(letter, key) {
        if (letter === ' ') letter = `\u00A0`;
        return (<Pop index={ key } key={ key }>{ letter }</Pop>);
    }
}