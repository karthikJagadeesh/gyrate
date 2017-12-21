import "babel-polyfill";
import p5 from "p5"; // 🎨

import { Gyrate } from "./gyrate"; // ✈️
import { Attractor } from "./attractor"; // ☀️

const app = p => {
  let [attractor, gyrate] = [null, []];

  p.setup = _ => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(10);

    attractor = new Attractor(p);
    for (let i = 0; i < 5; i++) {
      gyrate.push(new Gyrate(p));
    }
  };

  p.draw = _ => {
    p.background(10);

    gyrate.forEach(gyrate => {
      const forceV = attractor.attract(gyrate);
      gyrate.applyForce(forceV).show();
      attractor.move().show();
    });
  };
};

const appInstance = new p5(app);
