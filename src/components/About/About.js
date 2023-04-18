import React, { Component } from 'react';
import styled from 'styled-components';
import Line from "../utils/Line";
import MediaQuery from 'react-responsive';
import PoppingInText from "../utils/PoppingInText";
import ThreeDimensionalTriangle from "./ThreeDimensionalTriangle";
import {FlexWrapper, Section, SectionFirst} from "../utils/TwoColumnFlex";
import {StandardHeader} from "../utils/StandardHeader";


const Article = styled.article`
  margin-top: 25px;
  font-size: 14px;
  ${({theme}) => theme.media.mobile} {
    font-size: 16px;
  }
`;


class About extends Component {
    render() {
        return (
            <FlexWrapper>
                <SectionFirst>
                    <div>
                        <StandardHeader>
                            <PoppingInText>
                                About Me
                            </PoppingInText>
                        </StandardHeader>
                        <Line width="100%"/>
                        <Article>
                            <p>My programming journey started about 2017 after I've watched my first C++ tutorial.</p>
                            <p>I didn't know yet which coding path I should choose. I've tried writing desktop apps in C++, mobile apps in Xamarin or even games in Unity.</p>
                            <p>
                                Finally I chose web devolpment. I'd had a lot of fun with writing simple websites in HTML and CSS.
                            </p>
                            <p>I took programming back then not too seriously, but when I started wading into PHP, SQL, and JavaScript, I understood that this is what I want to do in my life.</p>
                        </Article>
                    </div>
                </SectionFirst>
                <MediaQuery query="(min-width:768px)">
                    <Section>
                        <ThreeDimensionalTriangle/>
                    </Section>
                </MediaQuery>
            </FlexWrapper>
        );
    }
}

export default About;
