import React, { Component } from 'react';
import styled from "styled-components";
import propTypes from 'prop-types';

const Button = styled.button`
  ${ ({ theme }) => theme.positionAbsoluteCentered };
  opacity: 0;
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 0;
  transition: opacity .35s, box-shadow .3s, background-color .1s;
  text-transform: uppercase;
  font-size: 8px;
  font-weight: 700;
  z-index: 5;
  box-shadow: 0 5px 10px rgba(0,0,0,.5);
  color: ${ ({ theme }) => theme.colors.primary };
  background: ${ ({ theme }) => theme.colors.dark };
  
  ${ ({ theme }) => theme.media.tablet } {
    height: 70px;
    width: 70px;
    font-size: 10px;
  }
  
  :focus {
    outline: none;
  }
  
  :hover {
    box-shadow: 0 7px 14px rgba(0,0,0,.6);
  }
  
  :active {
    background: #303543;
  }
`;


class ProjectOverlayButton extends Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.props.openModal(this.props.projectID);
    }

    render() {
        return (
            <Button onClick={this.openModal}>
                View Project
            </Button>
        );
    }
}

export default ProjectOverlayButton;