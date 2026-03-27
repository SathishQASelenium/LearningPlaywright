const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj)); // Give the keys: ["a", "b", "c"]
console.log(Object.values(obj)); // Give the values: [1, 2, 3]
console.log(Object.entries(obj)); // Give the entries: [["a", 1], ["b", 2], ["c", 3]]

const user = { name: "John", age: 30 };

for (const key in user) { // for in loop
    console.log(`${key}: ${user[key]}`);
}

// Object.keys/values/entries
Object.keys(user).forEach(key => { // forEach loop for keys
    console.log(key);
});

Object.entries(user).forEach(([key, value]) => { // forEach loop with key and value
    console.log(`${key}: ${value}`);
});