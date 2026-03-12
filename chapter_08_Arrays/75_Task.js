let arr = [1, 2, 3];
let copy = arr;
copy.push(4); // both arr and copy are referencing the same array in memory, so when we push to copy, it modifies the original array that both arr and copy are referencing.
console.log(arr.length); // Output: 4, because the original array is also modified when we push to copy. Both arr and copy are pointing to the same array in memory.
console.log(copy); // Output: [1, 2, 3, 4], because copy is referencing the same array as arr. When we push to copy, it modifies the original array that both arr and copy are referencing.