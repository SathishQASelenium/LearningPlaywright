let a = 5; 
let b = a++ + ++a;
let c = a++ + ++a + ++a + ++a + a++;

console.log(b);
console.log(a);
console.log(c);

// ERT
// Line No. | a | b  | Exp
// 1        | 5 | NA | NA
// 2        | 7 | 12 | 12
//Exp A + Exp B
// Exp A -> 5, a -> 6
// +
// Exp B -> 7, a -> 7
// 2        | 7 | 12 | 12

// Line No. | a | b  | c  | Exp
// 1        | 5 | NA | NA | NA
// 2        | 7 | 12 | NA | 12
// 3        | 12 | 12 | 48 | 48
//Exp A + Exp B + Exp C + Exp D + Exp E
// Exp A -> 7, a -> 8
// +
// Exp B -> 9, a -> 9
// +
// Exp C -> 10, a -> 10
// +
// Exp D -> 11, a -> 11
// +
// Exp E -> 11, a -> 12