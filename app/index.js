import '../styles/index.scss';
import Lenis from '@studio-freight/lenis';

class App {
  constructor() {
    this._createLenis();

    this._render();
  }

  _createLenis() {
    this.lenis = new Lenis({
      lerp: 0.15,
    });
  }

  _render(time) {
    this.lenis.raf(time);

    requestAnimationFrame(this._render.bind(this));
  }
}

new App();
