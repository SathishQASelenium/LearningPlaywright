/**Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) 
 * based on the following grading scale:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
**/
let grade;
let score = 95;

if (typeof score !== "number") {
    console.log("Are you fool,why you are gving score as not a number");
    return;
}

if (score < 0 || score > 100) {
    console.log("Are you fool,why you are gving score <0 or > 100");
    return;
}

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score <= 89) {
    grade = "B";
} else if (score >= 70 && score <= 79) {
    grade = "C";
} else if (score >= 60 && score <= 69) {
    grade = "D";
} else if (score >= 0 && score <= 59) {
    grade = "F";
} else {
    console.log("Invalid Score");
}

console.log("For the score", score, "Grade is ->", grade);
console.log(`For the score ${score} Grade is -> ${grade}`);