// Hello world program
console.log("Hello, world!");

// Declare variable using var
var myVar = "This is a variable declared using var";

// More about variable
var myNumber = 10;
var myString = "Hello";
var myBoolean = true;
var myNull = null;
var myUndefined;
var myBigInt = 9007199254740991n;

// Let
let myLetVar = "This is a variable declared using let";

// Const
const MY_CONSTANT = "This is a constant";

// String Indexing
const myStringIndex = "JavaScript";
console.log("Character at index 4:", myStringIndex[4]);

// Useful string methods
const myStringMethod = "Hello, world!";
console.log("Length of string:", myStringMethod.length);
console.log("Uppercase:", myStringMethod.toUpperCase());
console.log("Lowercase:", myStringMethod.toLowerCase());
console.log("Substring:", myStringMethod.substring(7, 12));
console.log("Split:", myStringMethod.split(", "));

// Template Strings
const name = "John";
const age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);

// Null, undefined, BigInt, typeof
console.log("Type of myNull:", typeof myNull);
console.log("Type of myUndefined:", typeof myUndefined);
console.log("Type of myBigInt:", typeof myBigInt);

// Booleans and Comparison Operator
const x = 5;
const y = 10;
console.log("x > y:", x > y);

// Truthy and Falsy Values
console.log("Truthy:", Boolean("Hello"));
console.log("Falsy:", Boolean(""));

// If else statement
if (x > y) {
    console.log("x is greater than y");
} else {
    console.log("x is not greater than y");
}

// Ternary Operator
const result = x > y ? "x is greater than y" : "x is not greater than y";
console.log("Ternary Operator:", result);

// && || operator
const a = true;
const b = false;
console.log("a && b:", a && b);
console.log("a || b:", a || b);

// Nested if else
const num = 15;
if (num > 0) {
    if (num % 2 === 0) {
        console.log("Positive even number");
    } else {
        console.log("Positive odd number");
    }
} else {
    console.log("Negative number");
}

// If elseif else
const score = 85;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}

// Switch statement
const grade = 'A';
switch (grade) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Fair");
        break;
    case 'D':
        console.log("Needs Improvement");
        break;
    default:
        console.log("Fail");
}

// While loop
let counter = 0;
while (counter < 5) {
    console.log("Counter:", counter);
    counter++;
}

// While loop examples
let num1 = 0;
let sum1 = 0;
while (num1 <= 10) {
    sum1 += num1;
    num1++;
}
console.log("Sum of numbers from 0 to 10:", sum1);

// For loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

// For loop examples
let sum2 = 0;
for (let i = 0; i <= 10; i++) {
    sum2 += i;
}
console.log("Sum of numbers from 0 to 10:", sum2);

// Break and continue keyword
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log("Break Example:", i);
}

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log("Continue Example:", i);
}

// Do while loop
let counter2 = 0;
do {
    console.log("Counter2:", counter2);
    counter2++;
} while (counter2 < 5);
