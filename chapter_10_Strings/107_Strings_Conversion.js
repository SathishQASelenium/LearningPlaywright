// String Conversion

// To string
(200).toString(); // "200" - number to string
true.toString();  // "true" - boolean to string

Number("42");  // 42 - string to number

parseInt("42px");  // 42 - parses integer from string
parseFloat("3.14rem"); //3.14 - parses float from string

let str = "hello"; //. Things are immutable in nature in Java. 
str[0] = "H"; // This will not change the string as strings are immutable.
console.log(str); // To change the string, we need to create a new string.
console.log(str); // "hello" - original string remains unchanged

let upper = str.toUpperCase(); // "HELLO" - creates a new string in uppercase
console.log(str); // "hello" - original string is unchanged
console.log(upper); // "HELLO" - new string created with uppercase