import React, { Component } from 'react';
import Navbar from "../Navbar";
import styled from 'styled-components';
import programming from "../../images/proggraming.jpeg";
import StylishText from "../StylishText";

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;


const FlexWrapper = styled.div`

    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;

const FlexColumn = styled.div`
    @media (min-width: 768px) {
  width: 50%;
  }
`;


const Header = styled.h1`
  color: #2ce8cd;
  font-size: 42px;
`;

const Text = styled.article`
  font-size: 18px;
  color: white;
`;


const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  box-shadow: 0 15px 30px rgba(15,15,15, 0.8);
  animation: fade-in .5s ease;
  display: block;
  
  @keyframes  fade-in
  {
    0% {
      opacity: 0;
    }
    
    100% {
      opacity: 1;
    }
  }
`;

class About extends Component {
    render() {
        return (
            <>
                <Navbar isActive={ 'about' }/>
                <AboutWrapper>
                    <FlexWrapper>
                        <FlexColumn className="flex1">
                            <Header>
                                <span className="letter">A</span>
                                <span className="letter">b</span>
                                <span className="letter">o</span>
                                <span className="letter">u</span>
                                <span className="letter">t</span> <span className="letter">m</span>
                                <span className="letter">e</span>
                            </Header>
                            <Text>
                                <p>My programming journey started about 2 years ago after I watched my first C++
                                    tutorial.</p>
                                <p>I didn't know yet which coding path should I choose. I've tried writing desktop apps
                                    in C++,
                                    mobile apps in Xamarin or even games in Unity.
                                </p>
                                <p>
                                    In the end I've chosen web dev. I've had a lot of fun with writing simple websites
                                    in
                                    HTML and CSS.
                                </p>
                                <p>
                                    Then I took programming not too seriously, but when I started wading in
                                    PHP, SQL and JS I understood that this is what I want to do in my life.
                                </p>
                            </Text>
                        </FlexColumn>
                        <FlexColumn className="flex2">
                            <Img src={ programming } className="xdimg" alt="Beatiful Code"/>
                        </FlexColumn>
                    </FlexWrapper>
                </AboutWrapper>
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

export default About;