import React, { Component } from 'react';
import styled from 'styled-components';
import PoppingInText from "../utils/PoppingInText";

const Header = styled.h1`
  font-size: 42px;
  color: white;
  text-align: center;
`;

const Primary = styled.span`
  color: ${ ({ theme }) => theme.colors.primary };
`;

class Claim extends Component {
    render() {
        return (
            <Header>
                <PoppingInText>
                    Hello I'm a <Primary>Piotr Zdziarski <Primary>xd</Primary></Primary>
                </PoppingInText>
            </Header>
        );
    }
}

export default Claim;