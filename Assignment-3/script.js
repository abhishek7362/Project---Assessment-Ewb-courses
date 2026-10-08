let score = 85;
let grade;

let scoreCategory;
if (score >= 90) {
    scoreCategory = "A";
} else if (score >= 80) {
    scoreCategory = "B";
} else if (score >= 70) {
    scoreCategory = "C";
} else if (score >= 60) {
    scoreCategory = "D";
} else {
    scoreCategory = "F";
}

switch (scoreCategory) {
    case "A":
        grade = "A";
        break;
    case "B":
        grade = "B";
        break;
    case "C":
        grade = "C";
        break;
    case "D":
        grade = "D";
        break;
    default:
        grade = "F";
}

let status = score >= 50 ? "Passed" : "Failed";

console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);