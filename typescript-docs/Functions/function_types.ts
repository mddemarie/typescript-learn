function add(x: number, y: number): number {
  return x + y
}

let myAdd = function(x: number, y: number): number { return x + y; };

let bla:((a: number, b: number) => number) = function(a: number, b: number):number { return a + b };
