interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; width: number } {
  let newSquare = { color: "blue", width: 4 };
  return newSquare;
}

let mySquare = createSquare({ color: "red", width: 100 });
console.log(mySquare);
