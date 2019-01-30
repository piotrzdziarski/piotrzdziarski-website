import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Line from "../utils/Line";


const BodyOverlay = styled.div`
  ${ ({ theme }) => theme.positionAbsoluteCentered };
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  overflow: auto;
  max-width: 1400px;
`;


const ModalWrapper = styled.section`
  margin-top: calc(${ ({ theme }) => theme.nav.mobileHeight } + 20px);
  margin-bottom: 30px;
  width: 90%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 15px 30px rgba(0,0,0,.6);
  padding: 20px;
  position: relative;
  background: ${ ({ theme }) => theme.colors.dark };
  
 
  ${ ({ theme }) => theme.media.mobile } {
    padding: 25px;
  }
  ${ ({ theme }) => theme.media.tablet } {
    padding: 30px;
    margin-top: 40px;
    width: 70%;
  }
  ${ ({ theme }) => theme.media.smallDesktop } {
    width: 60%;
  }
  ${ ({ theme }) => theme.media.bigDesktop } {
    width: 50%;
  }
`;

const ModalTitle = styled.h2`
  color: white;
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 20px;
`;

const ModalImg = styled.img`
  user-select: none;
  max-width: 100%;
  max-height: 100%;
  margin-top: 20px;
  box-shadow: 0 5px 10px rgba(0,0,0,.5);
`;

const ModalDescription = styled.article`
  font-size: 14px;
  font-weight: 500;
  color: white;
  margin-top: 20px;
`;

const WebsiteLink = styled.a`
  color: ${ ({ theme }) => theme.colors.primary };
  text-decoration: none;
`;


const CloseSignCss = css`
  content: '';
  position: absolute;
  height: 3px;
  width: 100%;
  background: white;
`;

const CloseButton = styled.button`
   width: 22px;
   height: 22px;
   border: 0;
   background: transparent;
   position: absolute;
   outline: none;
   cursor: pointer;
   
   right: 20px;
   top: 8px; 
   
   ${ ({ theme }) => theme.media.mobile } {
     right: 25px;
     top: 13px;
   }
       
   ::before {
      ${ CloseSignCss };
      transform: rotate(45deg);
   }
   
   ::after {
      ${ CloseSignCss };
      transform: rotate(135deg);
   }
`;

class ProjectModal extends Component {
    render() {
        return (
            <BodyOverlay>
                <ModalWrapper>
                    <CloseButton/>
                    <ModalTitle>{ this.props.title }</ModalTitle>
                    <Line width="100%"/>
                    <ModalImg src={ this.props.img }></ModalImg>
                    <ModalDescription>
                        <div>
                            { this.props.description }
                        </div>
                        <p>
                            Link to website:
                            <WebsiteLink rel="noopener noreferrer" target="_blank" href={ this.props.link }>
                                { this.props.link }
                            </WebsiteLink>
                        </p>
                    </ModalDescription>
                </ModalWrapper>
            </BodyOverlay>
        );
    }
}

export default ProjectModal;