const prompt = require("prompt-sync")();

// 1. Odd or even:
const n = parseInt(prompt("Enter a number: "));
function oddEven(n) {
  if (n % 2 === 0) {
    console.log(`${n} is an even number.`);
  } else {
    console.log(`${n} is an odd number.`);
  }
}
oddEven(n);

console.log("-------------------------------");
// 2. Grade calculation:
const score = parseInt(prompt("Enter the student's score: "));
function calculateGrade(score) {
  if (score >= 90) {
    console.log("The student's grade is A.");
  } else if (score >= 80) {
    console.log("The student's grade is B.");
  } else if (score >= 70) {
    console.log("The student's grade is C.");
  } else if (score >= 60) {
    console.log("The student's grade is D.");
  } else {
    console.log("The student's grade is F.");
  }
}
calculateGrade(score);
console.log("-------------------------------");

// 3. Leap year:
const year = parseInt(prompt("Enter a year: "));
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
}
isLeapYear(year);
console.log("-------------------------------");

// 4. Largest of three numbers:
const a = parseInt(prompt("Enter the first number: "));
const b = parseInt(prompt("Enter the second number: "));
const c = parseInt(prompt("Enter the third number: "));
function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    console.log(`${a} is the largest number.`);
  } else if (b >= a && b >= c) {
    console.log(`${b} is the largest number.`);
  } else {
    console.log(`${c} is the largest number.`);
  }
}
findLargest(a, b, c);
console.log("-------------------------------");

// 5. Vowel or consonant:
const char = prompt("Enter a character: ").toLowerCase();
function vowelConsonant(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(char)) {
    console.log(`${char} is a vowel.`);
  } else if (char >= "a" && char <= "z") {
    console.log(`${char} is a consonant.`);
  } else {
    console.log("Please enter a valid alphabet character.");
  }
}
vowelConsonant(char);
console.log("-------------------------------");

// 6. Positive, negative, or zero:
const num = parseInt(prompt("Enter a number: "));
function posNegZero(num) {
  if (num > 0) {
    console.log(`${num} is a positive number.`);
  } else if (num < 0) {
    console.log(`${num} is a negative number.`);
  } else {
    console.log("The number is zero.");
  }
}
posNegZero(num);
console.log("-------------------------------");

// 7. Calculator Program:
const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));
const operator = prompt("Enter an operator (+, -, *, /): ");
function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case "-":
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case "*":
            console.log(`${num1} * ${num2} = ${num1 * num2}`);
            break;
        case "/":
            if (num2 !== 0) {
                console.log(`${num1} / ${num2} = ${num1 / num2}`);
            } else {
                console.log("Error: Division by zero is not allowed.");
            }
            break;
        default:
            console.log("Please enter a valid operator (+, -, *, /).");
    }
}
calculator(num1, num2, operator);
console.log("-------------------------------");

// 8. Day of the week:
const dayNum = parseInt(prompt("Enter a number (1-7) for the day of the week: "));
function dayOfWeek(dayNum) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (dayNum >= 1 && dayNum <= 7) {
        console.log(`The day of the week is ${days[dayNum - 1]}.`);
    } else {
        console.log("Please enter a valid number between 1 and 7.");
    }
}
dayOfWeek(dayNum);
console.log("-------------------------------");

// 9. Eligible to vote:
const age = parseInt(prompt("Enter your age: "));
age >= 18
  ? console.log("You are eligible to vote.")
  : console.log("You are not eligible to vote.");

console.log("-------------------------------");

// 10.Type of triangle:
const side1 = parseFloat(prompt("Enter the length of the first side: "));
const side2 = parseFloat(prompt("Enter the length of the second side: "));
const side3 = parseFloat(prompt("Enter the length of the third side: "));
function triangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        console.log("The triangle is equilateral.");   
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        console.log("The triangle is isosceles.");
    } else {
        console.log("The triangle is scalene.");
    }
}
triangleType(side1, side2, side3);
console.log("-------------------------------");