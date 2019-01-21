import { scaleRendererOnResize } from "./scaleRendererOnResize";
import * as THREE from "three";
import { CanvasAnimate } from "./CanvasAnimate";
import { CanvasRectangle } from "./CanvasRectangle";


export class CanvasLogic {

    constructor(canvas) {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({ canvas: canvas });
    }


    createAnimation() {
        this.setUpCamera();
        this.setUpCanvasStaticProperties();
        scaleRendererOnResize(this.renderer);
        this.drawRectangle();
        this.animate();
    }


    setUpCamera() {
        const width = 400;
        const height = 300;
        const aspect = width / height;

        this.camera =
            new THREE.PerspectiveCamera(
                25,
                aspect,
                0.1,
                10000
            );
        this.scene.add(this.camera);
    }

    setUpCanvasStaticProperties() {
        CanvasLogic.scene = this.scene;
        CanvasLogic.renderer = this.renderer;
        CanvasLogic.camera = this.camera;
    }


    drawRectangle() {
        const canvasRectangle = new CanvasRectangle();
        canvasRectangle.drawRectangle();
    }


    animate() {
        const canvasAnimate = new CanvasAnimate();
        canvasAnimate.animate();
    }
}



