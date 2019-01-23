import { CanvasProperties } from "../CanvasProperties";
import { CanvasDot } from "./CanvasDot";
import { CanvasLine } from "./CanvasLine";
import { CanvasLogic } from "../CanvasLogic";

export class CanvasLasers extends CanvasProperties {

    drawLasers() {
        for (let i = 0; i < this.lasersNumber; i++) {
            CanvasLogic.randoms.push(Math.random());

            const dot = new CanvasDot();
            dot.drawDot();

            const line = new CanvasLine();
            line.drawLine();
        }
    }
}