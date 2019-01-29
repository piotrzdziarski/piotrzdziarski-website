import { Component } from 'react';
import { CanvasAnimateSpeedController } from "../CanvasAnimateSpeedController";
import {withRouter} from 'react-router-dom';

class CanvasAnimationComponent extends Component {

    constructor(props) {
        super(props);
        this.canvasAnimateSpeedController = new CanvasAnimateSpeedController();
        this.canvasAnimateSpeedController.runAnimationOnPageLoad();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.location.pathname !== prevProps.location.pathname) {
            this.canvasAnimateSpeedController.stopSpeedingUp();
            this.canvasAnimateSpeedController.counter = 0;
            this.canvasAnimateSpeedController.isGrowing = true;
            this.canvasAnimateSpeedController.runAnimation();
        }
    }


    render() {
        return (null);
    }
}

export default withRouter(CanvasAnimationComponent);