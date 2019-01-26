import React, { Component } from 'react';
import styled from 'styled-components';
import PoppingInLetters from "../utils/PoppingInLetters";

const Header = styled.h1`
  font-size: 42px;
  color: white;
  text-align: center;
`;

class Claim extends Component {
    render() {
        return (
            <Header>
                <PoppingInLetters>
                    Hello I'm a Piotr Zdziarski
                </PoppingInLetters>
            </Header>
        );
    }
}

export default Claim;