export default class BasicCalculator {
    constructor(display) {
        this.display = display;
        this.currentValue = "0";
        this.previousValue = null;
        this.operator = null;
    }

    inputDigit(digit) {
        if (this.currentValue === "0" && digit !== ".") {
            this.currentValue = digit;
        } else {
            this.currentValue += digit;
        }
        this.display.updateDisplay(this.currentValue);
    }

    inputOperator(operator) {
        if (this.operator && this.previousValue !== null) {
            this.calculate();
        }
        this.previousValue = parseFloat(this.currentValue);
        this.currentValue = "0";
        this.operator = operator;
    }

    calculate() {
        let result;
        const previous = this.previousValue;
        const current = parseFloat(this.currentValue);

        switch (this.operator) {
            case "add":
                result = previous + current;
                break;
            case "subtract":
                result = previous - current;
                break;
            case "multiply":
                result = previous * current;
                break;
            case "divide":
                result = previous / current;
                break;
            default:
                return;
        }

        this.currentValue = result.toString();
        this.operator = null;
        this.previousValue = null;
        this.display.updateDisplay(this.currentValue);
    }

    clear() {
        this.currentValue = "0";
        this.previousValue = null;
        this.operator = null;
        this.display.clear();
    }

    deleteLastDigit() {
        if (this.currentValue.length > 1) {
            this.currentValue = this.currentValue.slice(0, -1);
        } else {
            this.currentValue = "0";
        }
        this.display.updateDisplay(this.currentValue);
    }
}
