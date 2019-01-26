import React from 'react';
import styled from 'styled-components';

const RouteWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const RouteLayout = ({ children }) => (
    <RouteWrapper>{ children }</RouteWrapper>
);

export default RouteLayout;