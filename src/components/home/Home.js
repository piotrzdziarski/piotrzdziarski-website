import React, { Component } from 'react';
import Canvas from '../../canvas/Canvas';
import styled from 'styled-components';

const Claim = styled.div`
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  font-weight: 700;
  padding: 15px;
  text-align: center;
`;

const Header = styled.h1`
  display: block;
  font-size: 30px;
  padding: 0;
  margin: 0;

  @media (min-width: 476px) {
    font-size: 34px;
  }

  @media (min-width: 768px) {
    font-size: 38px;
  }

  @media (min-width: 1000px) {
    font-size: 42px;
  }
`;


const PrimaryColor = styled.span`
  color: ${props => props.theme.colors.primary}
`;


class Home extends Component {
    render() {
        return (
            <>
                <Canvas/>
                <Claim>
                    <Header>
                        Hello, I'm <PrimaryColor> Peter Zdziarski. </PrimaryColor>
                    </Header>
                    <Header>I'm a full-stack web developer.</Header>
                </Claim>
            </>
        );
    }
}


export default Home;