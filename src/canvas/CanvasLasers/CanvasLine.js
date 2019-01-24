import { CanvasProperties } from "../CanvasProperties";
import * as THREE from "three";
import { CanvasLogic } from "../CanvasLogic";

export class CanvasLine extends CanvasProperties {

    drawLine() {
        const material = new THREE.LineBasicMaterial({
            color: 0x999999, transparent: true, opacity: true
        });
        material.opacity = 0.15;
        const geometry = new THREE.Geometry();
        geometry.vertices.push(
            new THREE.Vector3(0, 200, -50),
            new THREE.Vector3(0, 0, 0),
        );
        const line = new THREE.Line(geometry, material);
        this.scene.add(line);
        CanvasLogic.canvasLines.push(line);
    }
}