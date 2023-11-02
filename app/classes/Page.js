import TextReveal from '../animations/TextReveal';

export default class Page {
  constructor() {
    this._createTextReveals();
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
}
