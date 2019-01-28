import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import Line from "../utils/Line";
import MediaQuery from 'react-responsive';
import PoppingInText from "../utils/PoppingInText";
import programming from "../../images/programming.jpeg";


const AboutWrapper = styled.main`
  height: 100%;
   ${ ({ theme }) => theme.media.tablet } {
      ${ ({ theme }) => theme.displayFlexCentered };
   } 
`;

const Section = styled.section`
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

const Article = styled.article`
  margin-top: 25px;
`;


const Header = styled.h1`
  font-size: 36px;
  ${ ({ theme }) => theme.media.mobile } {
    font-size: 42px;
  }
  margin-bottom: 20px;
`;


const FadeIn = keyframes`
  0%{
  opacity: 0;
  transform: scale(.95);
  }
  
  50% {
  transform: scale(1.05) rotate(5deg);
  }
  
  100%{
  transform: scale(1) rotate(0);
  opacity: 1;
  }
`;


const Img = styled.img`
  width: 100%;
  height: 50%;
  display: block;
  border-radius: 2px;
  animation: ${FadeIn} .6s forwards;
  border: 1px solid ${ ({ theme }) => theme.colors.primary };
  background: linear-gradient(rgba(23,31,39,.5), rgba(23,31,39,.5)), url(${ programming });
  background-size: cover;
`;




class About extends Component {
    render() {
        return (
            <AboutWrapper>
                <Section>
                    <div>
                        <Header>
                            <PoppingInText>
                                About Me
                            </PoppingInText>
                        </Header>
                        <Line width="100%"/>
                        <Article>
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
                        </Article>
                    </div>
                </Section>
                <MediaQuery query="(min-width:768px)">
                    <Section>
                        <Img alt=""/>
                    </Section>
                </MediaQuery>
            </AboutWrapper>
        );
    }
}

export default About;