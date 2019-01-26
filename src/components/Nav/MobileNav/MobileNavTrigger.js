import React, { Component } from 'react';
import styled from 'styled-components';

const TriggerWrapper = styled.div`
  ${ ({ theme }) => theme.displayFlexCentered };
  height: 100%;
  width: ${ ({ theme }) => theme.nav.mobileHeight };
  position: absolute;
  right: 0;
  cursor: pointer;
  top: 0;
`;

const TriggerBar = `
    width: 34px;
    height: .2rem;
    border-radius: 10px;
    display: block;
    position:absolute;
    left: 0;
`;

const InnerTrigger = styled.div`
  height: 28px;
  width: 34px;  
  position: relative;
`;


const Trigger = styled.div`
  ${ TriggerBar };
  top: 12px;
  transition: transform .3s;
  ${ (props) => props.isNavOpened && 'transform: rotate(45deg);' };
  background: ${
    (props) => (props.isNavOpened) ?
        props.theme.colors.primary :
        '#fff'
    };
   
  ::before {
    content: '';
    top: -12px;
    ${ TriggerBar };
    background: inherit;
    transition: transform .3s, top .3s, left .3s;
    ${ (props) => props.isNavOpened && 'transform: rotate(90deg); left: -0.05em; top: 0' };
  }
  
  ::after {
    content: '';
    top: 12px;
    ${ TriggerBar };
    background: inherit;
    transition: opacity .3s;
    ${ (props) => props.isNavOpened && 'opacity: 0' };
  }
`;

class MobileNavTrigger extends Component {
    render() {
        return (
            <TriggerWrapper onClick={ this.props.action }>
                <InnerTrigger>
                    <Trigger isNavOpened={ this.props.isNavOpened }/>
                </InnerTrigger>
            </TriggerWrapper>
        );
    }
}


export default MobileNavTrigger;
