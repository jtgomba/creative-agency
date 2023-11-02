import TextReveal from '../animations/TextReveal';
import Button from '../animations/Button';

export default class Page {
  constructor() {
    this._createTextReveals();
    this._createButtons();
  }

  _createTextReveals() {
    const textItems = [
      ...document.querySelectorAll('[data-animation="text-reveal"]'),
    ];

    if (!textItems) return;

    textItems.forEach((text) => {
      new TextReveal({
        element: text,
      });
    });
  }

  _createButtons() {
    const buttons = [...document.querySelectorAll('[data-animation="button"]')];
    if (!buttons) return;

    buttons.forEach((button) => {
      new Button({
        element: button,
      });
    });
  }
}
