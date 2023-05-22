let marks = [60, 92, 77, 82, 91];
let highestScorerIndex = 0;
let maxMarks = 0;

for (let i = 0; i < marks.length; i++) {
  let currentMarks = marks[i];

  maxMarks = currentMarks > maxMarks ? currentMarks : maxMarks;
  highestScorerIndex = currentMarks == maxMarks ? i : highestScorerIndex;
}

console.log(`The highest marks scored by a student is ${maxMarks}.`);
console.log(`Student ${highestScorerIndex + 1} scored the highest marks.`);
