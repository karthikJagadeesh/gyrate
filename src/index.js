import "babel-polyfill";
import p5 from "p5";

import { Gyrate } from "./Gyrate";
import { Attractor } from "./Attractor";

const app = p => {
  let attractors = [];

  p.setup = _ => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    const whiteColor = 255;
    p.background(whiteColor);

    for (let i = 0; i < 5; i++) {
      attractors.push(new Attractor(p));
    }
    console.log(attractors)
  };

  p.draw = _ => {
    attractors.forEach(attractor => {
      attractor.move().show();
    });
  };
};

const appInstance = new p5(app);
