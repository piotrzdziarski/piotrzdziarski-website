import { CanvasProperties } from "./CanvasProperties";
import * as THREE from "three";

export class CanvasResize extends CanvasProperties {

    addWindowResizeListener(func) {
        window.addEventListener('resize', func);
    }


    scaleRendererOnResize() {
        this.coefficient = window.innerWidth / window.innerHeight;
        this.addWindowResizeListener(this.scaleRenderer.bind(this));
        this.scaleRenderer();

    }

    scaleRenderer() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.canvasLines.forEach((line) => {
            line.geometry.vertices = [
                new THREE.Vector3(0, 200, -100 * ( 1 / this.coefficient)),
                new THREE.Vector3(0, 0, 0),
            ]
        });
    }
}