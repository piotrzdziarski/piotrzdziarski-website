import React, { Component } from 'react';
import Canvas from '../../canvas/Canvas';
import Navbar from '../Navbar';
import styled from 'styled-components';
import StylishText from "../StylishText";

const Claim = styled.div`
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  font-weight: 700;
  padding: 15px;
  text-align: center;
`;

const Header = styled.h1`
  display: block;
  font-size: 30px;
  padding: 0;
  margin: 0;

  @media (min-width: 476px) {
    font-size: 34px;
  }

  @media (min-width: 768px) {
    font-size: 38px;
  }

  @media (min-width: 1000px) {
    font-size: 42px;
  }
`;


const PrimaryColor = styled.span`
  color: ${ props => props.theme.colors.primary }
`;


class Home extends Component {

    constructor(props) {
        super(props);
        this.header = React.createRef();
    }

    render() {
        return (
            <>
                <Navbar isActive={ 'home' }/>
                <Claim ref={ this.header }>
                    <Header>
                        <span className="letter">H</span>
                        <span className="letter">e</span>
                        <span className="letter">l</span>
                        <span className="letter">l</span>
                        <span className="letter">o</span>
                        <span className="letter">,</span> <span className="letter">I</span>
                        <span className="letter">'</span>
                        <span className="letter">m</span> <PrimaryColor>
                        <span className="letter">P</span>
                        <span className="letter">e</span>
                        <span className="letter">t</span>
                        <span className="letter">e</span>
                        <span className="letter">r</span> <span className="letter">Z</span>
                        <span className="letter">d</span>
                        <span className="letter">z</span>
                        <span className="letter">i</span>
                        <span className="letter">a</span>
                        <span className="letter">r</span>
                        <span className="letter">s</span>
                        <span className="letter">k</span>
                        <span className="letter">i</span>
                        <span className="letter">.</span>
                    </PrimaryColor>
                    </Header>
                    <Header>
                        <span className="letter">I</span>
                        <span className="letter">'</span>
                        <span className="letter">m</span> <span className="letter">a</span> <span
                        className="letter">f</span>
                        <span className="letter">u</span>
                        <span className="letter">l</span>
                        <span className="letter">l</span>
                        <span className="letter">-</span>
                        <span className="letter">s</span>
                        <span className="letter">t</span>
                        <span className="letter">a</span>
                        <span className="letter">c</span>
                        <span className="letter">k</span> <span className="letter">w</span>
                        <span className="letter">e</span>
                        <span className="letter">b</span> <span className="letter">d</span>
                        <span className="letter">e</span>
                        <span className="letter">v</span>
                        <span className="letter">e</span>
                        <span className="letter">l</span>
                        <span className="letter">o</span>
                        <span className="letter">p</span>
                        <span className="letter">e</span>
                        <span className="letter">r</span>
                        <span className="letter">.</span>
                    </Header>
                </Claim>
            </>
        );
    }


    componentDidMount() {
        const letters = document.getElementsByClassName('letter');
        for (let i = 0; i < letters.length; i++) {
            setTimeout(() => {
                if (letters[i])
                    letters[i].classList.add('letter-in');
            }, i * 40);
        }
    }
}


export default Home;