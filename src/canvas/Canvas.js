import React, { Component } from 'react';
import styled from 'styled-components';
import { CanvasLogic } from "./CanvasLogic";

const CanvasThreeJs = styled.canvas`
  background: #27343e;
  margin: 0;
  padding: 0;
  display: block;
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
        console.log(this.canvas.current);
        const canvasLogic = new CanvasLogic(this.canvas.current);
        canvasLogic.createAnimation();
    }
}

export default Canvas;