class Attractor {
  constructor(p) {
    this._p = p;
    this.location = p.createVector(p.random(p.width), p.random(p.height));
    this._perlinTimeX = p.random(50);
    this._perlinTimeY = p.random(51, 100);
    this._G = 1;
    this.mass = 5;
  }

  attract(gyrate) {
    const p = this._p;
    const gravitationV = this.location.copy().sub(gyrate.location);
    const distance = p.constrain(gravitationV.magSq(), 10, 25);
    const gravitationMag = this.mass * gyrate.mass / gravitationV.magSq();
    gravitationV.mult(gravitationMag);
    return gravitationV;
  }

  move() {
    const p = this._p;
    const newLocationX = p.map(p.noise(this._perlinTimeX), 0, 1, 0, p.width);
    const newLocationY = p.map(p.noise(this._perlinTimeY), 0, 1, 0, p.height);
    this.location.set(newLocationX, newLocationY);
    this._perlinTimeX += 0.0002;
    this._perlinTimeY += 0.0002;
    return this;
  }

  show() {
    const p = this._p;
    p.noStroke();
    p.fill(242, 52, 31);
    p.ellipse(this.location.x, this.location.y, 30, 30);
    return this;
  }
}

export { Attractor };
