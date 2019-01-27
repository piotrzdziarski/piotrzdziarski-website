import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PoppingInText from "../utils/PoppingInText";

const headerFontSize = css`
  font-size: 28px;
  
  ${ ({ theme }) => theme.media.mobile } {
    font-size: 30px;
  }
  
  ${ ({ theme }) => theme.media.tablet } {
    font-size: 34px;
  }
  
  ${ ({ theme }) => theme.media.smallDesktop } {
    font-size: 38px;
  }

  ${ ({ theme }) => theme.media.bigDesktop } {
    font-size: 42px;
  }
`;

const ClaimWrapper = styled.main`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  ${ ({ theme }) => theme.displayFlexCentered };
  flex-direction: column;
`;

const Header = styled.div`
  ${ headerFontSize };
  display: block;
  color: white;
  font-weight: 500;
`;

const Primary = styled.h1`
  ${ headerFontSize };
  margin: 0;
  padding: 0;
  display: inline-block;
  color: ${ ({ theme }) => theme.colors.primary };
`;

const BlockWrapper = styled.div`
  display: block;
  ${ ({ theme }) => theme.media.mobile } {
    display: inline-block;
  }
`;


class Claim extends Component {
    render() {
        return (
            <ClaimWrapper>
                <Header>
                    <PoppingInText>Hello, I'm a</PoppingInText>
                    <BlockWrapper>
                        <Primary>
                            <PoppingInText delay={ 9 }> Peter Zdziarski</PoppingInText>
                        </Primary>
                        <PoppingInText delay={ 25 }>.</PoppingInText>
                    </BlockWrapper>
                </Header>
                <Header>
                    <PoppingInText delay={ 40 }>I'm a full-stack web</PoppingInText>
                    <BlockWrapper>
                        <PoppingInText delay={60}> developer.</PoppingInText>
                    </BlockWrapper>
                </Header>
            </ClaimWrapper>
        );
    }
}

export default Claim;