// Sample array
const numbers = [1, 2, 3, 4, 5];

// forEach method
console.log("forEach:");
numbers.forEach((num) => console.log(num));

// Map method
console.log("\nMap:");
const squaredNumbers = numbers.map((num) => num * num);
console.log("Squared numbers:", squaredNumbers);

// Filter method
console.log("\nFilter:");
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Reduce method
console.log("\nReduce:");
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

// Sort method
console.log("\nSort:");
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log("Sorted numbers:", sortedNumbers);

// Find method
console.log("\nFind:");
const foundNumber = numbers.find((num) => num > 3);
console.log("First number greater than 3:", foundNumber);

// Every method
console.log("\nEvery:");
const allPositive = numbers.every((num) => num > 0);
console.log("Are all numbers positive?", allPositive);

// Some method
console.log("\nSome:");
const hasNegative = numbers.some((num) => num < 0);
console.log("Does the array contain any negative number?", hasNegative);

// Fill method
console.log("\nFill:");
const filledArray = numbers.fill(0);
console.log("Filled array:", filledArray);

// Splice method
console.log("\nSplice:");
const splicedArray = numbers.splice(1, 2, 6, 7);
console.log("Spliced array:", splicedArray);
console.log("Original array after splice:", numbers);


