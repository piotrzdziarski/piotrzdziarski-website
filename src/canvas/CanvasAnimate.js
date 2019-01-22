import { AbstractCanvas } from "./AbstractCanvas";
import * as THREE from "three";
import { CanvasLogic } from "./CanvasLogic";

export class CanvasAnimate extends AbstractCanvas {

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.rotateRectangle();
        this.camera.lookAt(new THREE.Vector3(-6, 0, 1));
        this.camera.zoom = 0.08;
        this.camera.updateProjectionMatrix();
        this.renderer.render(this.scene, this.camera);
    }

    rotateRectangle() {
            for (let i = 0; i < 20; i + 0.5) {
                var time = Date.now() * 0.001 * this.randoms[i];
                CanvasLogic.dots[i].position.x = 1 * this.randoms[i] * -1;
                CanvasLogic.dots[i].position.y = Math.sin(time * 0.5) * i * 0.5;
                CanvasLogic.dots[i].position.z = Math.cos(time * 0.5) * i;
            }
    }
}