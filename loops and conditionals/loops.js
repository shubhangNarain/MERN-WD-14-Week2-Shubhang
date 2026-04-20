const prompt = require("prompt-sync")();

// 1. Multiplication Table
const n = parseInt(
  prompt("Enter a number to generate its multiplication table: "),
);
function multiplicationTable(num) {
  console.log(`Multiplication Table for ${n}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
multiplicationTable(n);
console.log("------------------------------------------------------");

// 2. Factorial of a number:
const num = parseInt(prompt("Enter a number to calculate its factorial: "));
function fact(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  console.log(`Factorial of ${num} is: ${factorial}`);
}
fact(num);
console.log("------------------------------------------------------");

// 3. Sum of n natural numbers:
const num3 = parseInt(
  prompt("Enter a number to calculate the sum of natural numbers: "),
);
function sumOfNaturalNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  console.log(`Sum of first ${num} natural numbers is: ${sum}`);
}
sumOfNaturalNumbers(num3);
console.log("------------------------------------------------------");

// 4. Reverse of a number:
const num4 = parseInt(prompt("Enter a number to reverse: "));
function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  console.log(`Reversed number is: ${reversed}`);
}
reverseNumber(num4);
console.log("------------------------------------------------------");

// 5. Print even numbers:
const num5 = parseInt(prompt("Enter a number to print even numbers up to: "));
function printEvenNumbers(num) {
  console.log(`Even numbers up to ${num}:`);
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
printEvenNumbers(num5);
console.log("------------------------------------------------------");

// 6. Count digits in a number:
const num6 = parseInt(prompt("Enter a number to count its digits: "));
function countDigits(num) {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  console.log(`Number of digits in the number is: ${count}`);
}
countDigits(num6);
console.log("------------------------------------------------------");

// 7. Fibonacci series:
const num7 = parseInt(prompt("Enter a number to generate Fibonacci series: "));
function fib(num) {
  let a = 0,
    b = 1,
    next;
  console.log(`Fibonacci series up to ${num}:`);
  while (num--) {
    console.log(a);
    next = a + b;
    a = b;
    b = next;
  }
}
fib(num7);
console.log("------------------------------------------------------");

//  8. Sum of Digits:
const num8 = parseInt(
  prompt("Enter a number to calculate the sum of its digits: "),
);
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  console.log(`Sum of digits is: ${sum}`);
}
sumOfDigits(num8);
console.log("------------------------------------------------------");

// 9. Pyramid printing:
const num9 = parseInt(prompt("Enter the number of rows for the pyramid: "));
function printPyramid(rows) {
  console.log(`Pyramid of ${rows} rows:`);
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "* ".repeat(i);
    console.log(spaces + stars);
  }
}
printPyramid(num9);
console.log("------------------------------------------------------");

// 10. Prime number check:
const num10 = parseInt(prompt("Enter a number to check if it's prime: "));
function isPrime(num) {
  if (num <= 1) {
    console.log(`${num} is not a prime number.`);
    return;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(`${num} is not a prime number.`);
      return;
    }
  }
  console.log(`${num} is a prime number.`);
}
isPrime(num10);
console.log("------------------------------------------------------");
