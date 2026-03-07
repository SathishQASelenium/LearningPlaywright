//Sorting

let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);
//  alphabetical by default

let numbers = [45, 82, 91, 60, 73];
numbers.sort();
console.log(numbers);
//  sorts as strings by default - 4 comes before 6, so 45 comes before 60

// To sort numbers correctly, we need to provide a compare function
numbers.sort((a, b) => a - b);
console.log(numbers);
//  sorts in ascending order

numbers.sort((a, b) => b - a);
console.log(numbers);
//  sorts in descending order