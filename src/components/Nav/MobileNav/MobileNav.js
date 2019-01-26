import React, { Component } from 'react';
import styled from 'styled-components';
import MobileNavTrigger from "./MobileNavTrigger";
import Logo from "../../utils/Logo";
import MobileNavDropdown from "./MobileNavDropdown";

const Wrapper = styled.div`
  ${ ({ theme }) => theme.media.tablet } {
    display: none;
  }
  width: 100vw;
  height: ${ ({ theme }) => theme.nav.mobileHeight };
`;

class MobileNav extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isNavOpened: false
        }
    }

    toggle() {
        this.setState({
            isNavOpened: !this.state.isNavOpened
        });
    }

    render() {
        return (
            <>
                <Wrapper>
                    <Logo/>
                    <MobileNavDropdown isNavOpened={ this.state.isNavOpened }/>
                    <MobileNavTrigger isNavOpened={ this.state.isNavOpened } action={ this.toggle }/>
                </Wrapper>
            </>
        );
    }
}

export default MobileNav;