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
        this.rotateCamera();

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

    rotateCamera() {
        let zIndex = 0;
        (this.coefficient < 1) ?
            zIndex = 15 :
            zIndex = 9;
        this.camera.lookAt(new THREE.Vector3(-6, -5, zIndex));
    }
}