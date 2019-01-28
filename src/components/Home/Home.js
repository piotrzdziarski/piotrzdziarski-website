import React, { Component } from 'react';
import Claim from "./Claim";
import styled, { css, keyframes } from 'styled-components';

const LineBase = css`
  position: absolute;
  border-radius: 4px;
  border: 1px solid ${ ({ theme }) => theme.colors.primary };
  animation: ${ widthIn } 1.25s forwards;
`;

const widthIn = keyframes`
  0% {
    width: 0;
  }
  
  100% {
    width: 40%;
  }
`;

export const Line = styled.div`
  ${ LineBase };
  
  top: 35%;  
  ${ ({ theme }) => theme.media.mobile } {
    top: 40%;
  }
  ${ ({ theme }) => theme.media.tablet } {
    top: 38%;
  }
  ${ ({ theme }) => theme.media.smallDesktop } {
    top:35%;
  }
  
  left: 5%;
  animation: ${ widthIn } 1.25s forwards;
`;

const LineSecond = styled.div`
  ${ LineBase };
  
  top: 65%;
  ${ ({ theme }) => theme.media.mobile } {
    top: 60%;
  }
  ${ ({ theme }) => theme.media.tablet } {
    top: 62%;
  }
  ${ ({ theme }) => theme.media.smallDesktop } {
    top: 65%;
  }
  
  right: 5%;
  animation: ${ widthIn } 1.25s forwards;
`;

class Home extends Component {
    render() {
        return (
            <>
                <Line/>
                <Claim/>
                <LineSecond/>
            </>
        );
    }
}

export default Home;