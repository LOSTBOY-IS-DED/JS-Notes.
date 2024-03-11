// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expression
const greetExpression = function(name) {
    return `Hello, ${name}!`;
};

// Arrow Functions
const greetArrow = (name) => `Hello, ${name}!`;

// Function inside function
function outerFunction() {
    function innerFunction() {
        console.log("Inside inner function");
    }
    innerFunction();
}

// Lexical Scope
const outer = () => {
    const message = "Hello from outer function";
    const inner = () => {
        console.log(message);
    };
    inner();
};

// Block Scope Vs Function Scope
function blockVsFunctionScope() {
    if (true) {
        var varScope = "Function Scope";
        let blockScope = "Block Scope";
        console.log("Inside block:", blockScope);
    }
    console.log("Outside block:", varScope);
    // console.log("Outside block:", blockScope); // Error: blockScope is not defined
}

// Default Parameters
const greetDefault = (name = "World") => `Hello, ${name}!`;

// Rest Parameters
const sum = (...args) => args.reduce((total, num) => total + num, 0);

// Parameter Destructuring
const person = { name: "John", age: 30 };
const { name, age } = person;
console.log("Destructured Name:", name);
console.log("Destructured Age:", age);

// Very brief intro to callback functions
const fetchData = (callback) => {
    setTimeout(() => {
        const data = "Some data from API";
        callback(data);
    }, 1000);
};

fetchData((data) => {
    console.log("Received data:", data);
});

// Functions returning Functions
const multiply = (x) => (y) => x * y;

console.log(greet("John"));
console.log(greetExpression("John"));
console.log(greetArrow("John"));
outerFunction();
outer();
blockVsFunctionScope();
console.log(greetDefault());
console.log(sum(1, 2, 3, 4, 5));
console.log(multiply(2)(3));
