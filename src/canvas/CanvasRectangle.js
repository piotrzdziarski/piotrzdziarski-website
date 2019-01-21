import { AbstractCanvas } from "./AbstractCanvas";
import * as THREE from "three";

export class CanvasRectangle extends AbstractCanvas {
    drawRectangle() {
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 3, sizeAttenuation: false } );
        var dot = new THREE.Points( dotGeometry, dotMaterial );
        this.scene.add( dot );
        this.camera.position.set(0, 0, 100);
        this.camera.lookAt(0, 0, 0);
    }
}