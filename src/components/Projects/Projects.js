import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import ProjectModal from "./ProjectModal";
import ProjectOverlayButton from "./ProjectOverlayButton";
import { ProjectsJSON } from './projectsJSON';


const PopIn = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const GridWrapper = styled.main`
  ${ ({ theme }) => theme.positionAbsoluteCentered };
  width: 95%;
  height: 100%;
  padding-top: ${ ({ theme }) => theme.nav.mobileHeight };
  padding-bottom: 10px;
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
   
  ${ ({ theme }) => theme.media.tablet } {
    padding: 0;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Project = styled.article`
  width: 100%;
  padding: 10px;
  position: relative;
  transition: transform .3s;
  ${ ({ theme }) => theme.displayFlexCentered };  
  
  ${ ({ theme }) => theme.media.tablet } {
    height: 33vh;
  } 
 
  :hover {
    transform: scale(1.1);
    button {
      opacity: 1;
    }
  }
`;

const ProjectImg = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 100%;
  opacity: 0;
  backface-visibility: hidden;
  animation: ${ PopIn } .5s forwards;
  animation-delay: ${ (props) => props.delay * 60 + 'ms' };
  box-shadow: 0 10px 20px rgba(0,0,0,0.5);
`;


class Projects extends Component {

    constructor(props) {
        super(props);
        this.projectImagesRefs = React.createRef();
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.createInitialStateModalValues();
    }

    createInitialStateModalValues() {
        this.setState({
            isModalOpen: false,
            modalTitle: '',
            modalImage: {},
            modalDescription: ``,
            modalLink: ''
        });
    }


    renderProjects() {
        const projectsJSXArray = [];

        for (let i = 0; i < ProjectsJSON.length; i++) {
            projectsJSXArray.push(
                <Project key={ i }>
                    <ProjectOverlayButton projectID={ i } openModal={ this.openModal }/>
                    <ProjectImg ref={ this.projectImagesRefs[i] } delay={ i } src={ ProjectsJSON[i].image }/>
                </Project>
            )
        }

        return projectsJSXArray;
    }


    openModal(projectID) {
        this.setState({
            isModalOpen: true,
            modalTitle: ProjectsJSON[projectID].title,
            modalImage: ProjectsJSON[projectID].image,
            modalDescription: ProjectsJSON[projectID].description,
            modalLink: ProjectsJSON[projectID].link
        });
    }

    renderModal() {
        if (!this.state || !this.state.isModalOpen)
            return;

        return (
            <ProjectModal
                closeModal={ this.closeModal }
                isModalOpen={ this.state.isModalOpen }
                modalTitle={ this.state.modalTitle }
                modalImage={ this.state.modalImage }
                modalDescription={ this.state.modalDescription }
                modalLink={ this.state.modalLink }
            />
        );
    }


    closeModal() {
        this.setState({
            isModalOpen: false
        });
    }


    render() {
        return (
            <>
                <GridWrapper>
                    { this.renderProjects() }
                    { this.renderModal() }
                </GridWrapper>
            </>
        );
    }
}

export default Projects;