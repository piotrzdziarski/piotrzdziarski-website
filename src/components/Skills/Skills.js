import React, { Component } from 'react';
import { FlexWrapper, Section, SectionFirst } from "../utils/TwoColumnFlex";
import { StandardHeader } from "../utils/StandardHeader";
import PoppingInText from "../utils/PoppingInText";
import Line from "../utils/Line";
import styled from 'styled-components';
import SkillsTable from "./SkillsTable";


const SkillsWrapper = styled(FlexWrapper)`
  padding-top: 50px;
  ${ ({ theme }) => theme.media.tablet } {
    padding-top: 0;
  }
`;


const Article = styled.article`
  margin-top: 25px;
`;

const FirstSection = styled(SectionFirst)`
  font-size: 12px;
  height: 50vh;
  padding: 25px 25px 0 25px;
  ${ ({ theme }) => theme.media.mobile } {
    font-size: 14px;
  }
  
  ${ ({ theme }) => theme.media.tablet } {
    font-size: 16px;
  } 
`;

const SecondSection = styled(Section)`
  align-items: flex-start;
  padding: 0;
  height: 40vh;
  ${ ({ theme }) => theme.media.mobile } {
    padding: 0;
  }  
  ${ ({ theme }) => theme.media.tablet } {
    padding: 25px;
    align-items: center;
    height: auto;
  }
`;


class Skills extends Component {
    render() {
        return (
            <SkillsWrapper>
                <FirstSection>
                    <div>
                        <StandardHeader>
                            <PoppingInText>
                                Skills
                            </PoppingInText>
                        </StandardHeader>
                        <Line width="100%"/>
                        <Article>
                            <p>
                                The main area of my expertise is front-end development. I love Vue.js &hearts;. From
                                the backend side I prefer PHP, when it comes to frameworks my biggest advantage is
                                Laravel.
                            </p>
                            <p>
                                I have experience in relational databases especially in MySQL and some knowledge of
                                Linux servers.
                            </p>
                            <p>
                                In front-end RWD is basis for me, mostly I write apps according to mobile first
                                methodology.
                            </p>
                        </Article>
                    </div>
                </FirstSection>
                <SecondSection>
                    <SkillsTable/>
                </SecondSection>
            </SkillsWrapper>
        );
    }
}

export default Skills;