class Gyrate {
  constructor(p) {
    this._p = p;
    this.location = p.createVector(p.random(p.width), p.random(p.height));
    this.velocity = p.createVector(5, 0);
    this.acceleration = p.createVector(0, 0);
    this.mass = 15;
  }

  applyForce(force) {
    this.acceleration.add(force);
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.velocity.limit(20);
    this.acceleration.mult(0);
    return this;
  }

  show() {
    const p = this._p;
    p.noStroke();
    p.fill(85);
    p.ellipse(this.location.x, this.location.y, 5, 5);
  }
}

export { Gyrate };
