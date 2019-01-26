import { CanvasProperties } from "./CanvasProperties";

export class CanvasAnimate extends CanvasProperties {

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.rotateLasers();
        this.coefficient = window.innerWidth / window.innerHeight;
        this.renderer.render(this.scene, this.camera);
    }

    rotateLasers() {
        for (let i = 0; i < this.lasersNumber; i++) {
            const time = Date.now() * 0.00008 * this.randoms[i];

            this.canvasDots[i].position.x = 0;
            this.canvasDots[i].position.y = Math.sin(time) * i * 0.5;
            this.canvasDots[i].position.z = Math.cos(time) * i * (0.8 / this.coefficient);

            this.canvasLines[i].position.x = 0;
            this.canvasLines[i].position.y = Math.sin(time ) * i * 0.5;
            this.canvasLines[i].position.z = Math.cos(time ) * i * (0.8 / this.coefficient);
        }
    }
}