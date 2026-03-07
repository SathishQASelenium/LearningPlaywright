let arr = [1, 2, 3];
console.log(arr);
// Add to END
arr.push(4);
console.log(arr);

// Remove from END
arr.pop();
console.log(arr);

arr.push(5, 6);
console.log(arr);


// Add to BEGINNING
arr.unshift(0);// adds 0 at the beginning of the array
console.log(arr);

// Remove from BEGINNING
arr.shift();// removes the first element of the array
console.log(arr);

// [ 1, 2, 3, 5, 6 ]

// splice(start, deleteCount, ...itemsToAdd)
arr.splice(2, 1); // removes 1 item at index 2
console.log(arr);

arr.splice(2, 0, 99);// adds 99 at index 2 without removing any item
console.log(arr);

arr.splice(1, 2, 10, 20);// removes 2 items at index 1 and adds 10 and 20 at index 1
console.log(arr);