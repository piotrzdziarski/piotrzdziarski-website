import styled from 'styled-components';

export const StandardHeader = styled.h1`
  font-size: 24px;
  ${({theme}) => theme.media.mobile} {
    font-size: 32px;
  } 
  
  ${({theme}) => theme.media.tablet} {
    font-size: 36px;
  }
  
  ${({theme}) => theme.media.smallDesktop} {
    font-size: 40px;
  } 
  margin-bottom: 20px;
`;
