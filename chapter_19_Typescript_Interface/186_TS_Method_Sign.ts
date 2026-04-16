// This is a structure
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply: (a: number, b: number) => number;  // Alternative syntax
}

// This is the implementation of the structure
const calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b
}

console.log(calc);