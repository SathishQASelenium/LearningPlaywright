// String Properties & Basic Access

let str = "Hello, World!";
// Length ( start from 1)
console.log(str.length);

// Access by index - starts from 0
console.log(str[0]);
console.log(str[7]);
console.log(str.at(-1));
console.log(str.at(-6));

// charAt() - returns character at index
str.charAt(0);   // "H"
// charCodeAt() — Unicode value
str.charCodeAt(0);  // 72