import React, { Component } from 'react';
import styled from 'styled-components';
import Line from "../utils/Line";
import MediaQuery from 'react-responsive';
import PoppingInText from "../utils/PoppingInText";
import ThreeDimensionalTriangle from "./ThreeDimensionalTriangle";


const AboutWrapper = styled.main`
  height: 100%;
  max-width: 1400px;
  margin: auto;
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


const SectionFirst = styled(Section)`
  ${ ({ theme }) => theme.media.mobile } {
    padding: 50px 40px 50px 60px;     
  }
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


class About extends Component {
    render() {
        return (
            <AboutWrapper>
                <SectionFirst>
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
                </SectionFirst>
                <MediaQuery query="(min-width:768px)">
                    <Section>
                        <ThreeDimensionalTriangle/>
                    </Section>
                </MediaQuery>
            </AboutWrapper>
        );
    }
}

export default About;