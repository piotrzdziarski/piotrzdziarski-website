import React, { Component } from 'react';
import styled from 'styled-components';
import { CanvasLogic } from "./CanvasLogic";

const CanvasThreeJs = styled.canvas`
  margin: 0;
  padding: 0;
  display: block;
  background: #222b30;
  position: relative;
  z-index: -10;
`;


class Canvas extends Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    render() {
        return (
            <CanvasThreeJs ref={ this.canvas }></CanvasThreeJs>
        );
    }

    componentDidMount() {
        const canvasLogic = new CanvasLogic(this.canvas.current);
        canvasLogic.createAnimation();
    }
}

export default Canvas;