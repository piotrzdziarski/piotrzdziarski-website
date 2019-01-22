import { AbstractCanvas } from "./AbstractCanvas";
import * as THREE from "three";
import { CanvasLogic } from "./CanvasLogic";

export class CanvasDots extends AbstractCanvas {

    drawDots() {
        for (let i = 0; i < 20; i+0.5) {
            this.drawDot();
        }


        var material = new THREE.LineBasicMaterial({
            color: 0x999999, transparent: true, opacity: true
        });
        material.opacity = 0.9;
        var geometry = new THREE.Geometry();
        geometry.vertices.push(
            new THREE.Vector3(-5, 0, 0),
            new THREE.Vector3(0, 10, 0)
        );
        material.linewidth = 1;
        var line = new THREE.Line(geometry, material);
        this.scene.add(line);
        CanvasLogic.dots.push(line);
        this.drawLinetwo();
    }


    drawDot() {
        let random = Math.random();
        const dotGeometry = new THREE.Geometry();
        const dotMaterial = new THREE.PointsMaterial({ size: 2, sizeAttenuation: false });
        const dot = new THREE.Points(dotGeometry, dotMaterial);
        CanvasLogic.dots.push(dot);
        CanvasLogic.randoms.push(random);
        this.scene.add(dot);
        dotGeometry.vertices.push(
            new THREE.Vector3(-4,0,0),
        );
    }


    drawSecondOgon() {
        let random = Math.random();
        const dotGeometry = new THREE.Geometry();
        const dotMaterial = new THREE.PointsMaterial({ size: 2, sizeAttenuation: false });
        const dot = new THREE.Points(dotGeometry, dotMaterial);
        CanvasLogic.dots.push(dot);
        CanvasLogic.randoms.push(random);
        this.scene.add(dot);
        dotGeometry.vertices.push(
            new THREE.Vector3(-4,0,0),
        );
    }

    drawLinetwo() {
        var material = new THREE.LineBasicMaterial({
            color: 0x999999, transparent: true, opacity: true
        });
        material.opacity = 0.9;

        var geometry = new THREE.Geometry();
        geometry.vertices.push(
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0, 0),
        );
        material.linewidth = 100;
        var line = new THREE.Line(geometry, material);
        this.scene.add(line);
        CanvasLogic.dots.push(line);

        this.drawLineThree();
    }

    drawLineThree() {
        var material = new THREE.LineBasicMaterial({
            color: 0x999999, transparent: true, opacity: true
        });
        material.opacity = 0.9;

        var geometry = new THREE.Geometry();
        geometry.vertices.push(
            new THREE.Vector3(-4.5, 0, 0),
            new THREE.Vector3(0, 9.8, 0)
        );
        material.linewidth = 1;
        var line = new THREE.Line(geometry, material);
        this.scene.add(line);
        CanvasLogic.dots.push(line);
    }
}