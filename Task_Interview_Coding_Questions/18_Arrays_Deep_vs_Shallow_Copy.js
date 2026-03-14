/**
 *  Exercise 3 — Deep vs Shallow Copy (Tricky)

What is the output and why? How would you fix it?

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status);
 */

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1]; // This creates a shallow copy of the array, but the objects inside are still the same references.
suite2[0].status = "fail"; // This modifies the status of the object that both suite1[0] and suite2[0] reference.
console.log(suite1[0].status);

// Output: "fail"
// Explanation: The spread operator creates a shallow copy of the array, but the objects inside the array are still referenced. Therefore, modifying the status in suite2 also modifies it in suite1.