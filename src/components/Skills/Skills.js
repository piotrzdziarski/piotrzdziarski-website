import React, { Component } from 'react';
import Navbar from "../Navbar";
import styled from "styled-components";
import programming from "../../images/proggraming.jpeg";


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

const SkillWrapper= styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

class Skills extends Component {
    render() {
        return (
            <>
                <Navbar isActive={ 'skills' }/>
                <AboutWrapper>
                    <FlexWrapper>
                        <FlexColumn className="flex1">
                            <Header>
                                <span className="letter">S</span>
                                <span className="letter">k</span>
                                <span className="letter">i</span>
                                <span className="letter">l</span>
                                <span className="letter">l</span>
                                <span className="letter">s</span> <span className="letter">&</span> <span
                                className="letter">E</span>
                                <span className="letter">x</span>
                                <span className="letter">p</span>
                                <span className="letter">e</span>
                                <span className="letter">r</span>
                                <span className="letter">i</span>
                                <span className="letter">e</span>
                                <span className="letter">n</span>
                                <span className="letter">c</span>
                                <span className="letter">e</span>
                            </Header>
                            <Text>
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
                            </Text>
                        </FlexColumn>
                        <FlexColumn className="flex2">
                            <SkillWrapper>
                                <h2 className="skill">HTML</h2>
                                <h2 className="skill">CSS</h2>
                                <h2 className="skill">JS</h2>
                                <h2 className="skill">PHP</h2>
                                <h2 className="skill">Sass</h2>
                                <h2 className="skill">MySQL</h2>
                                <h2 className="skill">Laravel</h2>
                                <h2 className="skill">Vue.js</h2>
                                <h2 className="skill">React.js</h2>
                                <h2 className="skill">Bootstrap</h2>
                                <h2 className="skill">Bulma</h2>
                                <h2 className="skill">RWD</h2>
                                <h2 className="skill">PHPUnit</h2>
                                <h2 className="skill">OOP</h2>
                                <h2 className="skill">REST API</h2>
                                <h2 className="skill">Three.js</h2>
                                <h2 className="skill">JEST</h2>
                                <h2 className="skill">Linux</h2>
                                <h2 className="skill">Gulp</h2>
                                <h2 className="skill">NPM</h2>
                                <h2 className="skill">Git</h2>
                            </SkillWrapper>
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


        const skills = document.getElementsByClassName('skill');
        for (let i = 0; i < skills.length; i++) {
            setTimeout(() => {
                if (skills[i])
                    skills[i].classList.add('letter-in');
            }, i * 40);

        }
    }
}

export default Skills;