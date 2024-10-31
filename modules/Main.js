import Display from './Display.js';
import BasicCalculator from './BasicCalculator.js';
import ScientificCalculator from './ScientificCalculator.js';
import ButtonHandler from './ButtonHandler.js';
import Theme from './Theme.js';

document.addEventListener("DOMContentLoaded", () => {
    const display = new Display(document.getElementById("display"));
    const basicCalculator = new BasicCalculator(display);
    const scientificCalculator = new ScientificCalculator(display);
    new ButtonHandler(basicCalculator, scientificCalculator);
    new Theme(); // Inisialisasi Tema
});
