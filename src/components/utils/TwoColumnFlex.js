import styled from 'styled-components';

export const FlexWrapper = styled.main`
  height: 100%;
  max-width: 1400px;
  margin: auto;
   ${ ({ theme }) => theme.media.tablet } {
      ${ ({ theme }) => theme.displayFlexCentered };
   } 
`;

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 25px;
  ${ ({ theme }) => theme.media.mobile } {
    padding: 50px;
  }
  color: white;
`;


export const SectionFirst = styled(Section)`
  ${ ({ theme }) => theme.media.tablet } {
    padding: 50px 30px 50px 70px;     
  }
`;