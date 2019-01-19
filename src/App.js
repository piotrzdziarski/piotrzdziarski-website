import React, {Component} from 'react';
import styled from 'styled-components';
import './App.css';
import './css/bulma.min.css';

const StyledWrapper = styled.div`
   display: flex;
   justify-content: center;
   
   
   :hover {
    background: black;
   }
`;


class App extends Component {
    render() {
        return (
            <div className="App">
                <StyledWrapper>
                    <h1>Piotr Zdziarski</h1>
                </StyledWrapper>
            </div>
        );
    }
}

export default App;
