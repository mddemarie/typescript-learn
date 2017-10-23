interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

interface Colors {
  readonly c1: string;
  readonly c2: string;
}

let c: Colors = { c1: "blue", c2: "red"};
console.log(c);
