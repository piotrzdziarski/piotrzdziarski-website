import React from 'react';
import styled from 'styled-components';

const RouteWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  ${ ({ theme }) => theme.media.tablet } {
    margin-left: ${ ({ theme }) => theme.nav.desktopWidth };
    width: calc(100vw  - ${ ({ theme }) => theme.nav.desktopWidth });
  }
`;

const RouteLayout = ({ children }) => (
    <RouteWrapper>{ children }</RouteWrapper>
);

export default RouteLayout;