import "../src/canvas/CanvasLogic";
import { CanvasAnimateSpeedController } from "../src/canvas/CanvasAnimateSpeedController";

jest.useFakeTimers();

test('Test on page load animation', () => {
    const canvasAnimateSpeedController = new CanvasAnimateSpeedController();

    canvasAnimateSpeedController.runAnimationOnPageLoad();
    expect(canvasAnimateSpeedController.counter).toEqual(canvasAnimateSpeedController.counterMaxValue);
    expect(setInterval).toHaveBeenCalledTimes(1);
    jest.runAllTimers();
    expect(clearInterval).toHaveBeenCalledTimes(1);
    expect(canvasAnimateSpeedController.counter).toEqual(0);
});



test('Test normal animation', () => {
    const canvasAnimateSpeedController = new CanvasAnimateSpeedController();

    expect(canvasAnimateSpeedController.speed).toEqual(1);
    canvasAnimateSpeedController.runAnimation();
    jest.runAllTimers();

    let testingSpeed = 1;
    for (let i = 0; i < canvasAnimateSpeedController.counterMaxValue; i += 15) {
        testingSpeed += canvasAnimateSpeedController.speedMultiplier * i;
    }

    for (let i = canvasAnimateSpeedController.counterMaxValue; i >= 0; i -= 1.5) {
        testingSpeed += canvasAnimateSpeedController.speedMultiplier * i;
    }

    expect(canvasAnimateSpeedController.speed).toEqual(testingSpeed);
});