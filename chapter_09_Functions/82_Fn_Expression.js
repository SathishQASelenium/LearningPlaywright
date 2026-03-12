// Type 3 Function Expression
const greet = function (name) {
    return `Hello, ${name}!`;
};

// Type 4 Function 
function greet1(name1) {
    return `Hello, ${name1}!`;
}

// Functions as Expression
const greet2 = function (name2) {
    return `Hello, ${name2}!`;
}

console.log(greet("Bob"));
console.log(greet1("Bob 1"));
console.log(greet2("Bob 2"));