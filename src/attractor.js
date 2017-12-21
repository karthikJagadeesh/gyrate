class Attractor {
  constructor(p) {
    this._p = p;
    this.location = p.createVector(p.random(p.width), p.random(p.height));
    this._perlinTimeX = p.random(50);
    this._perlinTimeY = p.random(51, 100);
  }

  move() {
    const p = this._p;

    const newLocationX = p.map(
      p.noise(this._perlinTimeX),
      0,
      1,
      0,
      p.width
    );
    const newLocationY = p.map(
      p.noise(this._perlinTimeY),
      0,
      1,
      0,
      p.height
    );
    this.location.set(newLocationX, newLocationY);
    this._perlinTimeX += 0.003;
    this._perlinTimeY += 0.003;
    return this
  }

  show() {
    const p = this._p;

    p.fill(255);
    p.ellipse(this.location.x, this.location.y, 20, 20);
    return this
  }
}

export { Attractor };
