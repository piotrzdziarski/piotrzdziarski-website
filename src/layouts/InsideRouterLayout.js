import React, { Component } from 'react';
import Nav from "../components/Nav/Nav";
import { withRouter } from "react-router-dom";
import { CanvasAnimateSpeedController } from "../canvas/CanvasAnimateSpeedController";


class InsideRouterLayout extends Component {

    constructor(props) {
        super(props);
        this.canvasAnimateSpeedController = new CanvasAnimateSpeedController();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.location.pathname !== prevProps.location.pathname) {
            this.canvasAnimateSpeedController.speedUpAnimation();
        }
    }


    render() {
        return (
            <>
                <Nav/>
            </>
        );
    }
}

export default withRouter(InsideRouterLayout);