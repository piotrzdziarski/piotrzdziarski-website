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
  animation-delay: ${ (props) => props.index * .04 + 's'};
`;


export class Popping {

    #poppingJSX = [];

    constructor(string) {
        this.toPopString = string;
    }

    getPoppingJSX() {
        this.iterateThroughLetter();
        return this.#poppingJSX;
    }

    iterateThroughLetter() {
        for (let i = 0; i < this.toPopString.length; i++) {
            const letterJSX = this.createJSXForLetter(this.toPopString.charAt(i), i);
            this.attachToPoppingJSX(letterJSX);
        }
    }

    createJSXForLetter(letter, key) {
        return (<Pop index={ key } key={ key }>{ letter }</Pop>);
    }

    attachToPoppingJSX(letterJSX) {
        this.#poppingJSX.push(letterJSX);
    }
}