/**
 * Exercise 2 — Spot the Bug

What is wrong with this code? Fix it.

let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort();
console.log("Fastest:", sorted[0]);
 */

let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort((a, b) => b - a); // Sort in descending order to get the fastest time at index 0
console.log("Fastest:", sorted[0]);