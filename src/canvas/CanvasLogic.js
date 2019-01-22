import * as THREE from "three";
import { CanvasAnimate } from "./CanvasAnimate";
import { CanvasResize } from "./CanvasResize";
import { CanvasDots } from "./CanvasDots";


export class CanvasLogic {

    constructor(canvas) {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
        this.renderer.setClearColor(0x27343e, 1)
    }


    createAnimation() {
        this.setUpCamera();
        this.setUpCanvasStaticProperties();
        this.drawDots();

        this.scaleRendererOnResize();
        this.animate();
    }


    setUpCamera() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const aspect = width / height;

        this.camera =
            new THREE.OrthographicCamera(
                -1,
                1,
                1,
                -1,
                -500,
                1000
            );

        this.scene.add(this.camera);
    }

    setUpCanvasStaticProperties() {
        CanvasLogic.scene = this.scene;
        CanvasLogic.renderer = this.renderer;
        CanvasLogic.camera = this.camera;
        CanvasLogic.dots = [];
        CanvasLogic.randoms = [];
    }

    scaleRendererOnResize() {
        const canvasResize = new CanvasResize();
        canvasResize.scaleRendererOnResize();
    }

    drawDots() {
        const canvasDots = new CanvasDots();
        canvasDots.drawDots();
    }


    animate() {
        const canvasAnimate = new CanvasAnimate();
        canvasAnimate.animate();
    }
}



