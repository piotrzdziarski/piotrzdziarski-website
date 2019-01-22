import { CanvasLogic } from "./CanvasLogic";

export class AbstractCanvas {
    constructor() {
        this.scene = CanvasLogic.scene;
        this.renderer = CanvasLogic.renderer;
        this.camera = CanvasLogic.camera;
        this.rectangle = CanvasLogic.rectangle;
        this.randoms = CanvasLogic.randoms;
    }
}