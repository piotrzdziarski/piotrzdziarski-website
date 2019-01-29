import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';


const PopIn = keyframes`
   0% {
    opacity: 0;
    transform: scale(.8);
   }
   
   50% {
   transform: scale(1.2);
   }
   
   
   100% {
   transform: scale(1);
    opacity: 1;
   }
`;


const SkillsWrapper = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 0;
  height: 100%;
  ${ ({ theme }) => theme.displayFlexCentered };
  flex-wrap: wrap;
  text-align: center;
  ${({theme}) => theme.media.tablet} {
    text-align: left;
  }   
`;


const Skill = styled.li` 
  color: ${ ({ theme }) => theme.colors.primary };
  font-weight: 700;
  
  font-size: 12px;
  ${({theme}) => theme.media.mobile} {
    font-size: 16px; 
  }
  ${({theme}) => theme.media.tablet} {
    font-size: 18px;
  }
  ${({theme}) => theme.media.smallDesktop} {
    font-size: 22px;
  }

  
  
  margin-top: 12px;
  ${({theme}) => theme.media.mobile} {
    margin-top: 20px;
  }
  ${({theme}) => theme.media.tablet} {
    margin-top: 45px;
  }
  
  flex: 1 0 33%;
  opacity:0;
  animation: ${PopIn} .4s forwards;
  animation-delay: ${(props) => props.animationDelay + 'ms'};
`;


class SkillsTable extends Component {

    renderSkills() {
        const arrayWithSkills = [
            'HTML',
            'CSS',
            'JS',
            'PHP',
            'Sass',
            'MySQL',
            'Laravel',
            'Vue.js',
            'React.js',
            'Bootstrap',
            'Bulma',
            'RWD',
            'PHPUnit',
            'OOP',
            'REST API',
            'Three.js',
            'JEST',
            'Linux',
            'Gulp',
            'NPM',
            'Git',
        ];

        const skillsJSXTable = [];

        arrayWithSkills.forEach((skill, i) => {
            skillsJSXTable.push(<Skill animationDelay={i * 60} key={ i }>{ skill }</Skill>);
        });

        return skillsJSXTable;
    }


    render() {
        return (
            <SkillsWrapper>
                { this.renderSkills() }
            </SkillsWrapper>
        );
    }
}

export default SkillsTable;