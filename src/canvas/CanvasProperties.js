import { CanvasLogic } from "./CanvasLogic";

export class CanvasProperties {
    constructor() {
        this.scene = CanvasLogic.scene;
        this.renderer = CanvasLogic.renderer;
        this.camera = CanvasLogic.camera;
        this.rectangle = CanvasLogic.rectangle;
        this.randoms = CanvasLogic.randoms;
        this.lasersNumber = 100;
        this.canvasDots = CanvasLogic.canvasDots;
        this.canvasLines = CanvasLogic.canvasLines;
    }
}