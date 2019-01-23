import { CanvasProperties } from "./CanvasProperties";
import * as THREE from "three";

export class CanvasAnimate extends CanvasProperties {

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.rotateRectangle();
        this.camera.lookAt(new THREE.Vector3(-6, 0,  4));
        this.camera.zoom = 0.08;
        this.camera.updateProjectionMatrix();
        this.renderer.render(this.scene, this.camera);
    }

    rotateRectangle() {
        const coefficient = window.innerWidth / window.innerHeight;

        for (let i = 0; i < this.lasersNumber; i++) {
            const time = Date.now() * 0.0008 * this.randoms[i];

            this.canvasDots[i].position.x = -1;
            this.canvasDots[i].position.y = Math.sin(time * 0.5) * i * 0.5;
            this.canvasDots[i].position.z = Math.cos(time * 0.5) * i *  (0.8 / coefficient);

            this.canvasLines[i].position.x = -1;
            this.canvasLines[i].position.y = Math.sin(time * 0.5) * i * 0.5;
            this.canvasLines[i].position.z = Math.cos(time * 0.5) * i *  (0.8 / coefficient);
        }
    }
}