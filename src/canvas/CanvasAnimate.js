import { AbstractCanvas } from "./AbstractCanvas";

export class CanvasAnimate extends AbstractCanvas {

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
}