// Iterables
const iterableArray = [1, 2, 3];
for (const num of iterableArray) {
    console.log(num);
}

// Sets
const mySet = new Set([1, 2, 3]);
mySet.add(4);
console.log("Set:", mySet);

// Maps
const myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
console.log("Map:", myMap);

// Object.assign
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log("Merged Object:", mergedObj);

// Optional chaining
const user = {
    name: "John",
    address: {
        city: "New York"
    }
};
console.log("User city:", user?.address?.city);

// Call, apply, and bind method
function greet(message) {
    console.log(message, this.name);
}

const person = { name: "Alice" };

greet.call(person, "Hello");
greet.apply(person, ["Hi"]);

const greetPerson = greet.bind(person, "Hey");
greetPerson();

// Some warnings
console.warn("This is a warning message!");

// This inside arrow functions
const arrowFunction = () => {
    console.log("This inside arrow function:", this);
};

arrowFunction();

// Short syntax for methods
const myObject = {
    method() {
        console.log("Short syntax for methods");
    }
};
myObject.method();

// Factory functions & discuss some memory related problems
function createUser(name, age) {
    return {
        name,
        age,
        getInfo() {
            return `${this.name} is ${this.age} years old.`;
        }
    };
}

const user1 = createUser("Alice", 30);
console.log(user1.getInfo());

// First solution to that problem
// Not applicable in this code snippet.

// Why that solution isn’t that great
// Not applicable in this code snippet.

// What is __proto__, [[prototype]]
console.log("User1 prototype:", user1.__proto__);
console.log("User1 prototype (alternate):", Object.getPrototypeOf(user1));

// What is prototype
// Prototype is an object shared among all instances of a constructor function.

// Use prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getInfo = function() {
    return `${this.name} is ${this.age} years old.`;
};

const person1 = new Person("Bob", 25);
console.log(person1.getInfo());

// New keyword
// Not applicable in this code snippet.

// Constructor function with new keyword
// Not applicable in this code snippet.

// More discussion about proto and prototype
// Not applicable in this code snippet.

// Class keyword
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Example using class keyword
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Buddy");
dog.speak();

// Super keyword
// Not applicable in this code snippet.

// Method overriding
// Covered in the "Example using class keyword".

// Getters and setters
class Square {
    constructor(side) {
        this.side = side;
    }
    get area() {
        return this.side * this.side;
    }
    set area(value) {
        this.side = Math.sqrt(value);
    }
}

const square = new Square(4);
console.log("Area:", square.area);
square.area = 16;
console.log("New side length:", square.side);

// Static methods and properties
class MathUtil {
    static add(x, y) {
        return x + y;
    }
}

console.log("Addition:", MathUtil.add(3, 4));
