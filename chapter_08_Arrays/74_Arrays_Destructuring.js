// let [first, second, third] = [10, 20, 30];

// console.log(first);
// console.log(second);
// console.log(third);

let [first, second, ...third] = [10, 20, 30, 40, 50];
console.log(first); // first element is stored in first variable.
console.log(second); // second element is stored in second variable.
console.log(third); // third variable is storing the rest of the elements in the array. (30, 40, 50) in this case. It is stored as an array.