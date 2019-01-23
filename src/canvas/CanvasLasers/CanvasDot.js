import { CanvasProperties } from "../CanvasProperties";
import * as THREE from "three";
import { CanvasLogic } from "../CanvasLogic";

export class CanvasDot extends CanvasProperties {

    drawDot() {
        const color = this.generateRandomColor();
        const dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(
            new THREE.Vector3(0, 0, 0),
        );
        const dotMaterial = new THREE.PointsMaterial({ size: 2, sizeAttenuation: false, color: color });
        const dot = new THREE.Points(dotGeometry, dotMaterial);
        CanvasLogic.canvasDots.push(dot);
        this.scene.add(dot);

    }

    generateRandomColor() {
        let rgbString = "rgb(";
        for (let i = 0; i < 3; i++) {
            rgbString += (Math.floor(Math.random() * 255));

            (i === 2)
                ? rgbString += ')' :
                rgbString += ',';
        }
        return rgbString;
    }
}