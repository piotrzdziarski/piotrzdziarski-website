import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import MobileNav from "./MobileNav/MobileNav";
import DesktopNav from "./DesktopNav/DesktopNav";

const MainNav = styled.nav`
  z-index:2;
  position: absolute;
  top:0;
  left: 0;
  background: ${ ({ theme }) => theme.nav.background };
`;


class Nav extends Component {
    render() {
        return (
            <MainNav>
                <MobileNav/>
                <MediaQuery query="(min-width:768px)">
                    <DesktopNav/>
                </MediaQuery>
            </MainNav>
        );
    }
}


export default Nav;