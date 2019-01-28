import React from 'react';
import styled, { keyframes } from 'styled-components';


const rotate = keyframes`
  0% {
    transform: rotateX(0) rotateY(0) rotateZ(0);
  }
  100% {
    transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
  }
`;


const Plane = styled.div`
  width: 250px;
  height: 250px;
  
  ${ ({ theme }) => theme.media.smallDesktop } {
    width: 325px;
    height: 325px;
  }
  
  
  ${ ({ theme }) => theme.media.bigDesktop } {
    width: 400px;
    height: 400px;
  }

  transform-style: preserve-3d;
  margin: auto;
  transform: rotateX(60deg) rotateZ(-30deg);
  animation: ${ rotate } 20s infinite linear;
`;


const Circle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  border-radius: 100%;
  box-sizing: border-box;
  box-shadow: 0 0 4px #2ce8cd, inset 0 0 4px #2ce8cd;
  
  
  ::before, ::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 10%;
    height: 10%;
    border-radius: 100%;
    background: #2ce8cd;
    box-sizing: border-box;
    box-shadow: 0 0 30px 2px #2ce8cd;
  }
      
      
  ::before {
    transform: translateZ(-90px);
  }
  ::after {
    transform: translateZ(90px);
  }
  :nth-child(1) {
    transform: rotateZ(72deg) rotateX(63.435deg);
  }
  :nth-child(2) {
    transform: rotateZ(144deg) rotateX(63.435deg);
  }
  :nth-child(3) {
    transform: rotateZ(216deg) rotateX(63.435deg);
  }
  :nth-child(4) {
    transform: rotateZ(288deg) rotateX(63.435deg);
  }
  :nth-child(5) {
    transform: rotateZ(360deg) rotateX(63.435deg);
  }
`;


const ThreeDimensionalTriangle = () => (
    <Plane>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
    </Plane>
);


export default ThreeDimensionalTriangle;