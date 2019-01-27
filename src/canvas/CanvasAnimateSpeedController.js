import { CanvasAnimate } from "./CanvasAnimate";

export class CanvasAnimateSpeedController {

    constructor() {
        this.speed = 1;
        this.counter = 325;
        this.isGrowing = true;
    }

    speedUpAnimation() {
        this.intervalContainer = setInterval(this.speedInterval.bind(this), 15);
    }


    speedInterval() {
        if(this.counter > 325) {
            this.isGrowing = false;
            this.counter = 325;
            return;
        }

        if(this.counter < 0) {
            this.counter = 0;
            this.isGrowing = true;
            this.stopSpeedingUp();
            return;
        }


        (this.isGrowing) ?
            this.counter += 3:
            this.counter -= 1.5;


        this.speed += 0.0000000000002 * this.counter;
        CanvasAnimate.setSpeed(this.speed);
    }

    stopSpeedingUp() {
        clearInterval(this.intervalContainer);
    }
}