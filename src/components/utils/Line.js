import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';


const widthIn = (props) =>  keyframes`
  0% {
    width: 0;
  }
  
  100% {
    width: ${ props.width };
  }
`;


const LineBase = styled.div`
  border-radius: 4px;
  border: 1px solid ${ ({ theme }) => theme.colors.primary };
  animation: ${ widthIn } 1.25s forwards;
`;


class Line extends Component {
    render() {
        return (
            <LineBase width={this.props.width}/>
        );
    }
}

export default Line;