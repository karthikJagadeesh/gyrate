class Gyrate {
  constructor(p) {
    this._p = p;
    this.location = p.createVector(p.random(p.width), p.random(p.height));
    this.velocity = p.createVector(0, 0);
    this.acceleration = p.createVector(0, 0);
    this.color = [p.random(90, 255), p.random(90, 255), p.random(90, 255)];
    this.mass = 12;
    this.size = p.random(8, 16);
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
    p.fill(this.color);
    p.ellipse(this.location.x, this.location.y, this.size);
  }
}

export { Gyrate };
