import * as THREE from "three";
import { CanvasAnimate } from "./CanvasAnimate";
import { CanvasResize } from "./CanvasResize";
import { CanvasLasers } from "./CanvasLasers/CanvasLasers";

export class CanvasLogic {

    constructor(canvas) {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
        this.renderer.setClearColor(0x252934 , 1)
    }


    createAnimation() {
        this.setUpCamera();
        this.setUpCanvasStaticProperties();
        this.drawLasers();

        this.scaleRendererOnResize();
        this.animate();
    }


    setUpCamera() {
        this.camera =
            new THREE.OrthographicCamera(
                -1,
                1,
                1,
                -1,
                -500,
                1000
            );

        this.camera.zoom = 0.08;
        this.camera.updateProjectionMatrix();

        this.scene.add(this.camera);
    }

    setUpCanvasStaticProperties() {
        CanvasLogic.scene = this.scene;
        CanvasLogic.renderer = this.renderer;
        CanvasLogic.camera = this.camera;
        CanvasLogic.dots = [];
        CanvasLogic.randoms = [];
        CanvasLogic.canvasDots = [];
        CanvasLogic.canvasLines = [];
    }

    drawLasers() {
        const drawLasers = new CanvasLasers();
        drawLasers.drawLasers();
    }

    scaleRendererOnResize() {
        const canvasResize = new CanvasResize();
        canvasResize.scaleRendererOnResize();
    }

    animate() {
        const canvasAnimate = new CanvasAnimate();
        canvasAnimate.animate();
    }
}



