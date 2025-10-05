import { useState } from "react";

export interface Point {
  x: number;
  y: number;
}

export interface Model {
  points: Point[];
  click?: Point;
  mouse?: Point;
  delta?: Point;
  hover: number;
  shift?: boolean;
  active: number;
  position?: Point;
}

const model: Model = {
  points: [
    { x: 0, y: 0 },
    { x: 8, y: 1 },
    { x: 4, y: 4 },
    { x: 8, y: 8 },
  ],
  position: undefined,
  delta: undefined,
  click: undefined,
  mouse: undefined,
  shift: true,
  hover: -1,
  active: -1,
};

export function getPosition(model: Model, p: Point): Point {
  if (model.mouse && model.click) {
    let dx = (model.mouse.x - model.click.x) / 25;
    let dy = (model.mouse.y - model.click.y) / 25;
    if (true) {
      if (Math.abs(dx) > Math.abs(dy)) {
        dy = 0;
      } else {
        dx = 0;
      }
    }
    return {
      x: p.x + dx,
      y: p.y + dy,
    };
  }
  return p;
}

export function useModel() {
  return useState(() => model);
}
