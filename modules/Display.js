export default class Display {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.clear();
    }

    updateDisplay(value) {
        this.displayElement.textContent = value;
    }

    getValue() {
        return parseFloat(this.displayElement.textContent);
    }

    clear() {
        this.updateDisplay("0");
    }
}
