export default class ButtonHandler {
    constructor(basicCalculator, scientificCalculator) {
        this.basicCalculator = basicCalculator;
        this.scientificCalculator = scientificCalculator;
        this.initialize();
    }

    initialize() {
        document.querySelectorAll("button").forEach(button => {
            button.addEventListener("click", () => {
                const value = button.getAttribute("data-value");
                const operator = button.getAttribute("data-operator");

                if (value !== null) {
                    this.basicCalculator.inputDigit(value);
                } else if (operator) {
                    switch (operator) {
                        case "add":
                        case "subtract":
                        case "multiply":
                        case "divide":
                            this.basicCalculator.inputOperator(operator);
                            break;
                        case "equals":
                            this.basicCalculator.calculate();
                            break;
                        case "clear":
                            this.basicCalculator.clear();
                            break;
                        case "delete":
                            this.basicCalculator.deleteLastDigit();
                            break;
                        case "sin":
                            this.scientificCalculator.calculateSin();
                            break;
                        case "cos":
                            this.scientificCalculator.calculateCos();
                            break;
                        case "tan":
                            this.scientificCalculator.calculateTan();
                            break;
                        case "log":
                            this.scientificCalculator.calculateLog();
                            break;
                    }
                }
            });
        });
    }
}
