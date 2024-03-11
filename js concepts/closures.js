// Intro to closures
console.log("Intro to Closures:");

// Closure Example 1
console.log("\nClosure Example 1:");
function outerFunction() {
    const outerVar = "I'm outer!";
    function innerFunction() {
        console.log(outerVar);
    }
    return innerFunction;
}

const closureExample1 = outerFunction();
closureExample1(); // Prints: "I'm outer!"

// Closure Example 2
console.log("\nClosure Example 2:");
function greet(name) {
    return function() {
        console.log("Hello, " + name + "!");
    };
}

const greetJohn = greet("John");
const greetAlice = greet("Alice");

greetJohn(); // Prints: "Hello, John!"
greetAlice(); // Prints: "Hello, Alice!"

// Closure Example 3
console.log("\nClosure Example 3:");
function counter() {
    let count = 0;
    return function() {
        count++;
        console.log("Count:", count);
    };
}

const incrementCounter = counter();
incrementCounter(); // Prints: "Count: 1"
incrementCounter(); // Prints: "Count: 2"
incrementCounter(); // Prints: "Count: 3"
