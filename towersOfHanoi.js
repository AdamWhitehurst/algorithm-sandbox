/**
 * Represents a peg for holding data representations of disks
 * @param {string} name - The name of this peg
 * @method push - push a new disk onto peg
 * @method pop - remove and return the top disk on peg
 */
class Peg {
  constructor(name) {
    this.arr = [];
    this.name = name;
    this.push = n => {
      this.arr.push(n);
    };
    this.pop = () => {
      return this.arr.pop();
    };
  }
}

function towersOfHanoi(N) {
  let A = new Peg("A");

  for (let i = N; i > 0; i--) {
    A.push(i);
  }

  function move(N, A, B, C) {
    if (N === 0) return;
    if (N !== 1)
      console.log(
        `CALLING: ${N} disk(s) from ${A.name} to ${C.name} using ${B.name}`
      );
    move(N - 1, A, C, B);
    console.log(`MOVING: disc ${N} from ${A.name} to ${C.name}`);
    C.push(A.pop());
    move(N - 1, B, A, C);
  }
  move(N, A, new Peg("B"), new Peg("C"));
}

towersOfHanoi(4);
