import React, { Component } from 'react';
import Navbar from "../Navbar";
import styled from 'styled-components';
import FsLightbox from "../../images/fslightbox.jpg";
import cossack from "../../images/cossack.jpg";
import bulma from "../../images/bulma.jpg";
import cars from "../../images/cars.jpeg";
import quizert from "../../images/quizert.jpg";
import skijumping from "../../images/skijumping.jpg";
import treerum from "../../images/treerum.jpg";
import smokes from "../../images/smokes.jpg";
import spacer from "../../images/spacer.jpg";
import bendophoto from "../../images/bendophoto.jpg";

const ProjectsWrapper = styled.main`
  margin-left: 50px;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-flow: row wrap;
  width: calc(100% - 50px);
  justify-content: space-around;
`;

const Project = styled.article`
  width:100%;
  flex: 1 0 20%;
  border: 1px solid transparent;
  background-size: cover;
  position: relative;
  transition: filter .3s ease;
  box-shadow: 0 5px 10px #000;
  
  :hover {
        filter: brightness(150%);
    }
    
  
  ::before {
  content: '';
  float: left;
  padding-top: 100%;
  }
`;


const ProjectHover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    :hover button {
       opacity: 1 !important;
    }
`;

const ProjectHoverButton = styled.button` 
   font-size: 10px;
   font-family: Arial, sans-serif;
   text-transform: uppercase;  
   background: #2deed3;
   border: 0;
   height: 80px;
   width: 80px;
   border-radius: 50%;
   text-align: center;
   transition: opacity .3s;
   cursor: pointer;
   box-shadow: 0 10px 20px rgba(0,0,0,0.8);
   opacity: 0;
   outline: none;
   font-weight: 700;
   
   :active {
    background: #1d9987;
   }
`;


class Projects extends Component {
    render() {
        return (
            <>
                <Navbar isActive={ 'projects' }></Navbar>
                <ProjectsWrapper>
                    <Project className="project"
                        style={ { backgroundImage: "linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url(" + FsLightbox + ")" } }>
                        <ProjectHover>
                            <a href="https://fslightbox.com" target="_blank">
                                <ProjectHoverButton>View <div>Project</div></ProjectHoverButton>
                            </a>
                        </ProjectHover>
                    </Project>
                    <Project className="project"
                        style={ { backgroundImage: "linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url(" + cossack + ")" } }>
                        <ProjectHover>
                            <a href="https://cossackfood.000webhostapp.com" target="_blank">
                                <ProjectHoverButton>View <div>Project</div></ProjectHoverButton>
                            </a>
                        </ProjectHover>
                    </Project>
                    <Project className="project"
                        style={ { backgroundImage: "linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url(" + bulma + ")" } }>
                        <ProjectHover>
                            <a href="https://github.com/MDBulma/MDBulma" target="_blank">
                                <ProjectHoverButton>View <div>Project</div></ProjectHoverButton>
                            </a>
                        </ProjectHover>
                    </Project>
                    <Project className="project"
                        style={ { backgroundImage: "linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url(" + cars + ")" } }>
                        <ProjectHover>
                            <a href="https://github.com/PiotrZdziarski/ElectricCars" target="_blank">
                                <ProjectHoverButton>View <div>Project</div></ProjectHoverButton>
                            </a>
                        </ProjectHover>
                    </Project>
                    <Project className="project"
                        style={ { backgroundImage: "linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url(" + quizert + ")" } }>
                        <ProjectHover>
                            <a href="http://quizert.000webhostapp.com/" target="_blank">
                                <ProjectHoverButton>View <div>Project</div></ProjectHoverButton>
                            </a>
                        </ProjectHover>
                    </Project>
                    <Project className="project"
                        style={ { backgroundImage: "linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url(" + skijumping + ")" } }>
                        <ProjectHover>
                            <a href="https://skijumping.000webhostapp.com/" target="_blank">
                                <ProjectHoverButton>View <div>Project</div></ProjectHoverButton>
                            </a>
                        </ProjectHover>
                    </Project>
                    <Project className="project"
                        style={ { backgroundImage: "linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url(" + treerum + ")" } }>
                        <ProjectHover>
                            <a href="https://treerum.000webhostapp.com/" target="_blank">
                                <ProjectHoverButton>View <div>Project</div></ProjectHoverButton>
                            </a>
                        </ProjectHover>
                    </Project>
                    <Project className="project"
                        style={ { backgroundImage: "linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url(" + smokes + ")" } }>
                        <ProjectHover>
                            <a href="http://pzdziarski2001.000webhostapp.com" target="_blank">
                                <ProjectHoverButton>View <div>Project</div></ProjectHoverButton>
                            </a>
                        </ProjectHover>
                    </Project>
                    <Project className="project"
                        style={ { backgroundImage: "linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url(" + spacer + ")" } }>
                        <ProjectHover>
                            <a href="https://heuristic-goodall-60abde.netlify.com/" target="_blank">
                                <ProjectHoverButton>View <div>Project</div></ProjectHoverButton>
                            </a>
                        </ProjectHover>
                    </Project>
                    <Project className="project"
                        style={ { backgroundImage: "linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url(" + bendophoto + ")" } }>
                        <ProjectHover>
                            <a href="http://bendophoto.000webhostapp.com/" target="_blank">
                                <ProjectHoverButton>View <div>Project</div></ProjectHoverButton>
                            </a>
                        </ProjectHover>
                    </Project>
                </ProjectsWrapper>
            </>
        );
    }

    componentDidMount() {
        const projects = document.getElementsByClassName('project');
        for (let i = 0; i < projects.length; i++) {
            setTimeout(() => {
                if (projects[i])
                    projects[i].classList.add('img-in');
            }, i * 80);
        }
    }
}

export default Projects;