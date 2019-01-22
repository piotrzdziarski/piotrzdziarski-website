import { AbstractCanvas } from "./AbstractCanvas";

export class CanvasResize extends AbstractCanvas {

    #tanFOV;
    #windowHeight;

    addWindowResizeListener(func) {
        window.addEventListener('resize', func);
    }


    scaleRendererOnResize() {
        this.addWindowResizeListener(this.scaleRenderer.bind(this));
        this.scaleRenderer();
    }

    scaleRenderer() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }


    rectangleConstantDimensions() {
        this.#tanFOV = Math.tan( ( ( Math.PI / 180 ) * this.camera.fov / 2 ) );
        this.#windowHeight = window.innerHeight;
        this.addWindowResizeListener(this.constantRectangle.bind(this));
        this.constantRectangle();
    }


    constantRectangle() {
        this.camera.aspect = window.innerWidth / window.innerHeight;

        // adjust the FOV
        this.camera.fov = ( 360 / Math.PI ) * Math.atan( this.#tanFOV * ( window.innerHeight / this.#windowHeight ) );

        this.camera.updateProjectionMatrix();

        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.render( this.scene, this.camera );
    }
}