export default class ScientificCalculator {
    constructor(display) {
        this.display = display;
    }

    calculateSin() {
        this.display.updateDisplay(Math.sin(this.display.getValue()).toFixed(5));
    }

    calculateCos() {
        this.display.updateDisplay(Math.cos(this.display.getValue()).toFixed(5));
    }

    calculateTan() {
        this.display.updateDisplay(Math.tan(this.display.getValue()).toFixed(5));
    }

    calculateLog() {
        this.display.updateDisplay(Math.log10(this.display.getValue()).toFixed(5));
    }
}
