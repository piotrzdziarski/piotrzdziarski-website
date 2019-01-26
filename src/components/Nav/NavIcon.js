import React, { Component } from 'react';
import styled from 'styled-components';


const Svg = styled.svg`
  width: ${ (props) => props.width ? props.width : "30px" };
  height: ${ (props) => props.height ? props.height : "30px" };
  transition: opacity ${ (props) => props.isNavOpened ? '.2s' : '.1s' } cubic-bezier(0,0,.7,1);
  opacity: ${ (props) => props.isNavOpened ? '1' : '0' };
  cursor: pointer;
   
  path {
    transition: fill .25s;
    fill: ${ (props) => props.isActive ? props.theme.colors.primary : '#bbb' };
  }
  
  :hover {
    path {
      fill: #fff;
    }
  }
  
  :active {
    path {
      fill: ${ ({ theme }) => theme.colors.primary };
    }
  }
`;

class NavIcon extends Component {
    render() {
        return (
            <Svg
                isActive={ this.props.isActive }
                width={ this.props.width }
                height={ this.props.height }
                isNavOpened={ this.props.isNavOpened }
                viewBox={ this.props.viewBox }
            >
                <path d={ this.props.d }></path>
            </Svg>
        );
    }
}

export default NavIcon;