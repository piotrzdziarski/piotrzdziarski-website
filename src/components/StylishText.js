import React, { Component } from 'react';
import styled from 'styled-components';

const Text = styled.span`
  font-family: 'Rancho', cursive;
  font-size: 22px;
  letter-spacing: 3px;
  color: #414a50;
`;

class StylishText extends Component {
    render() {
        return (
            <Text>
                {this.props.text}
            </Text>
        );
    }
}

export default StylishText;