import { CanvasAnimate } from "./CanvasAnimate";

export class CanvasAnimateSpeedController {


    constructor() {
        this.counter = 0;
        this.speed = 1;
        this.counterMaxValue = 330;
        this.decreaseSpeedValue = 1.5;
        this.timeoutValue = 15;
        this.isGrowing = true;
        this.speedMultiplier = 0.0000000000002;
    }

    runAnimationOnPageLoad() {
        this.counter = this.counterMaxValue;
        this.isGrowing = false;
        this.runAnimation();
    }

    runAnimation() {
        this.intervalContainer = setInterval(this.speedInterval.bind(this), this.timeoutValue);
    }

    stopSpeedingUp() {
        clearInterval(this.intervalContainer);
    }

    speedInterval() {
        if(this.counter > this.counterMaxValue) {
            this.isGrowing = false;
            this.counter = this.counterMaxValue;
            return;
        }

        if(this.counter < 0) {
            this.counter = 0;
            this.isGrowing = true;

            // first animation is longer (for better UX) so after it finishes we will speed up next ones
            this.decreaseSpeedValue = 5;
            this.stopSpeedingUp();
            return;
        }

        (this.isGrowing) ?
            this.counter += 15:
            this.counter -= this.decreaseSpeedValue;


        this.speed += this.speedMultiplier * this.counter;
        CanvasAnimate.setSpeed(this.speed);
    }
}