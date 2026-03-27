const user = { name1: "John", age: 30, city: "NYC" };

// Basic destructuring
const { name1, age } = user;
console.log(name1);
console.log(age);

// Rename variables or Alias Name
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

// Default values
const { country = "USA" } = user;
console.log(country);

// Nested destructuring - never use this in real code, it's just for demonstration purposes
const data = { user: { name: "John", address: { city: "NYC" } } };
const { user: { address: { city } } } = data;