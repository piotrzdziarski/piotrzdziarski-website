import { CanvasLogic } from "../../canvas/CanvasLogic";
import Canvas from 'canvas';

document.body.innerHTML = `
    <canvas id="canvas"></canvas>
`;

const canvas = Canvas.createCanvas(200,200);
const canvasisisko = document.createElement('canvas');
const canvasLogic = new CanvasLogic(canvasisisko);

test('canvas logic', () => {

});