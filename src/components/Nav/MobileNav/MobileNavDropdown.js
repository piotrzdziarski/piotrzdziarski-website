import React, { Component } from 'react';
import styled from 'styled-components';
import RouteIcons from "../RouteIcons";

const DropdownWrapper = styled.div`
  ${ ({ theme }) => theme.displayFlexCentered };
  width: 100%;
  background: ${ ({ theme }) => theme.nav.background };
  transition: height .25s cubic-bezier(0,0,.7,1);
  height:  ${ (props) => props.isNavOpened ? props.theme.nav.mobileHeight : 0 };
    
  a {
    margin: 0 20px;
  }
`;


class MobileNavDropdown extends Component {
    render() {
        return (
            <DropdownWrapper isNavOpened={ this.props.isNavOpened }>
                <RouteIcons isNavOpened={ this.props.isNavOpened }/>
            </DropdownWrapper>
        );
    }
}

export default MobileNavDropdown;
