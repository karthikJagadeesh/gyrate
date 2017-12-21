import "babel-polyfill";
import p5 from "p5"; // 🎨

import { Gyrate } from "./gyrate"; // ✈️
import { Attractor } from "./attractor"; // ☀️

const app = p => {
  let attractors = [];
  let gyrate;

  p.setup = _ => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    const whiteColor = 255;
    p.background(whiteColor);

    for (let i = 0; i < 1; i++) {
      attractors.push(new Attractor(p));
    }
    gyrate = new Gyrate(p);
  };

  p.draw = _ => {
    gyrate.show();
    attractors.forEach(attractor => {
      const forceV = attractor.attract(gyrate);
      gyrate.applyForce(forceV).show();
      attractor.move().show();
    });
  };
};

const appInstance = new p5(app);
