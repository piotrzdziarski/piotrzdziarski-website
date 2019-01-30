import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const MainLogo = styled.div`
  ${ ({ theme }) => theme.displayFlexCentered };
  flex-direction: column;
  width: ${ ({ theme }) => theme.nav.mobileHeight };
  height: ${ ({ theme }) => theme.nav.mobileHeight };
    
  ${ ({ theme }) => theme.media.tablet } {
      width: ${ ({ theme }) => theme.nav.desktopWidth };
      height: 75px;  
  }
`;

const PLetter = styled.div`
  ${ ({ theme }) => theme.displayFlexCentered };
  font-size: 42px;
  height: 36px;
  padding-bottom: 2px;
  font-weight: 700;
  color: ${ ({ theme }) => theme.colors.primary };
`;

const LogoName = styled.h2`
  font-size: .6em;
  font-weight: 700;
  margin: 0;
  color: white;
  background: transparent;
  text-decoration: none;
  text-transform: uppercase;
`;

const LogoLink = styled(Link)`
  color: transparent;
  display: inline-block;
`;


class Logo extends Component {
    render() {
        return (
            <LogoLink to='/'>
                <MainLogo>
                    <PLetter>
                        P
                    </PLetter>
                    <LogoName>
                        Peter
                    </LogoName>
                </MainLogo>
            </LogoLink>
        );
    }
}

export default Logo;