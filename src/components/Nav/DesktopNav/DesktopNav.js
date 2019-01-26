import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from "../../utils/Logo";
import RouteIcons from "../RouteIcons";
import NavIcon from "../NavIcon";

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  height: 100vh;
  background: ${ ({ theme }) => theme.nav.background };
  width: ${ ({ theme }) => theme.nav.desktopWidth };
`;


const RouteIconsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  ${ ({ theme }) => theme.displayFlexCentered };
  flex-direction: column;

  a {
    margin: 15px 0;
  }
`;


const SocialWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  ${ ({ theme }) => theme.displayFlexCentered };
  flex-direction: column;
  margin-bottom: 5px;
  
  a {
    margin: 7px 0;
  }
`;


class DesktopNav extends Component {

    render() {
        return (
            <Wrapper>
                <Logo/>
                <RouteIconsWrapper>
                    <RouteIcons isNavOpened={ true }/>
                </RouteIconsWrapper>
                <SocialWrapper>
                    <a rel="noopener noreferrer" href="https://facebook.com" target="_blank">
                        <NavIcon
                            viewBox="0 0 50 50"
                            width={ 15 }
                            height={ 15 }
                            isNavOpened={ true }
                            d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"/>
                    </a>
                    <a rel="noopener noreferrer" href="https://plus.google.com/u/1/109781204808502720868"
                       target="_blank">
                        <NavIcon
                            viewBox="0 0 50 50"
                            width={ 20 }
                            height={ 20 }
                            isNavOpened={ true }
                            d="M 17.1875 10.9375 C 9.421875 10.9375 3.125 17.234375 3.125 25 C 3.125 32.765625 9.421875 39.0625 17.1875 39.0625 C 24.953125 39.0625 31.25 32.765625 31.25 25 C 31.25 24.035156 31.144531 23.09375 30.960938 22.1875 L 30.882813 21.875 L 17.1875 21.875 L 17.1875 26.5625 L 26.5625 26.5625 C 25.816406 30.996094 21.832031 34.375 17.1875 34.375 C 12.007813 34.375 7.8125 30.179688 7.8125 25 C 7.8125 19.820313 12.007813 15.625 17.1875 15.625 C 19.53125 15.625 21.667969 16.492188 23.3125 17.914063 L 26.671875 14.625 C 24.171875 12.335938 20.84375 10.9375 17.1875 10.9375 Z M 39.0625 17.1875 L 39.0625 21.875 L 34.375 21.875 L 34.375 25 L 39.0625 25 L 39.0625 29.6875 L 42.1875 29.6875 L 42.1875 25 L 46.875 25 L 46.875 21.875 L 42.1875 21.875 L 42.1875 17.1875 Z "/>
                    </a>
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/piotr-zdziarski-826646175/"
                       target="_blank">
                        <NavIcon
                            viewBox="0 0 30 30"
                            width={ 16 }
                            height={ 16 }
                            isNavOpened={ true }
                            d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"/>
                    </a>
                </SocialWrapper>
            </Wrapper>
        );
    }
}


export default DesktopNav;