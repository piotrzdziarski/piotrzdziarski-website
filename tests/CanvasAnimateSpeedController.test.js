import "../src/canvas/CanvasLogic";
import { CanvasAnimateSpeedController } from "../src/canvas/CanvasAnimateSpeedController";

jest.useFakeTimers();

test('Test on page load animation', () => {
    const canvasAnimateSpeedController = new CanvasAnimateSpeedController();

    canvasAnimateSpeedController.runAnimationOnPageLoad();
    expect(canvasAnimateSpeedController.counter).toEqual(canvasAnimateSpeedController.counterMaxValue);
    expect(setInterval).toHaveBeenCalledTimes(1);

    jest.runAllTimers();
    expect(canvasAnimateSpeedController.counter).toEqual(0);
});



test('Test normal animation', () => {
    const canvasAnimateSpeedController = new CanvasAnimateSpeedController();

    expect(canvasAnimateSpeedController.speed).toEqual(1);
    canvasAnimateSpeedController.runAnimation();
    canvasAnimateSpeedController.decreaseSpeedValue = 5;
    jest.runAllTimers();

    let testingSpeed = 1;
    for (let i = 0; i <= canvasAnimateSpeedController.counterMaxValue + 15; i += 15) {
        testingSpeed += canvasAnimateSpeedController.speedMultiplier * i;
    }

    for (let i = canvasAnimateSpeedController.counterMaxValue - 5; i >= -5; i -= 5) {
        testingSpeed += canvasAnimateSpeedController.speedMultiplier * i;
    }

    expect(canvasAnimateSpeedController.speed).toEqual(testingSpeed);
});
