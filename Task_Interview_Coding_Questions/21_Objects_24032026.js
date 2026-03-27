// 1. What is an object in JavaScript?
// It's a collection of key-value pairs, where each key is a string (or symbol) and the value can be any data type, including other objects. Objects are used to store and organize data in a structured way.
// Example:
let student1 = { name: "Amit", age: 65 };
console.log(student1.name); // Output: Amit

// 2. How do you access object properties?
// You can access object properties using dot notation or bracket notation.
// Dot notation:
console.log(student1.name); // Output: Amit
// Bracket notation:
console.log(student1["age"]); // Output: 65

// 3. Difference between dot and bracket notation
// Dot notation is used when the property name is a valid identifier and is known at compile time.
// Bracket notation is used when the property name is not a valid identifier or is determined at runtime.

// 4. How to add and delete properties?
// To add a property, you can simply assign a value to a new key:
student1.grade = "A"; // Adds a new property 'grade' with value 'A'
console.log(student1); // Output: { name: "Amit", age: 65, grade: "A" }
// To delete a property, you can use the delete operator:
delete student1.age; // Deletes the 'age' property
console.log(student1); // Output: { name: "Amit", grade: "A" }  

// 5. How to check if a property exists?
// You can use the in operator or the hasOwnProperty method to check if a property exists in an object.
// Using in operator:
console.log("name" in student1); // Output: true
// Using hasOwnProperty method:
console.log(student1.hasOwnProperty("age")); // Output: false

// 6. What is Object.keys()?
// Object.keys() is a method that returns an array of a given object's own enumerable property names (keys). It allows you to retrieve all the keys of an object in an array format.
// Example:
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // Output: ["a", "b", "c"]

// 7. What is Object.values()?
// Object.values() is a method that returns an array of a given object's own enumerable property values. It allows you to retrieve all the values of an object in an array format.
// Example:
console.log(Object.values(obj)); // Output: [1, 2, 3]

// 8. What is Object.entries()?
// Object.entries() is a method that returns an array of a given object's own enumerable property [key, value] pairs. It allows you to retrieve all the key-value pairs of an object in an array format.
// Example:
console.log(Object.entries(obj)); // Output: [["a", 1], ["b", 2], ["c", 3]]

// 9. How to loop through an object?
// You can loop through an object using a for...in loop, which iterates over the enumerable properties of an object. Alternatively, you can use Object.keys(), Object.values(), or Object.entries() in combination with array methods like forEach() to loop through the properties.
// Example using for...in loop:
const user = { name: "John", age: 30 };
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
} // Output: name: John, age: 30

// Another example with forEach loop using Object.keys():
Object.keys(user).forEach(key => {
    console.log(key);
}); // Output: name, age

// Example with forEach loop using Object.entries():
Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
}); // Output: name: John, age: 30