// Global Execution Context
console.log("Global Execution Context:");
console.log("This in global context:", this);
console.log("Window object:", window);

// Hoisting
console.log("\nHoisting:");
console.log("x:", x); // undefined
var x = 10;

// Reference Error
// console.log(y); // ReferenceError: y is not defined
let y = 20;

// Function Execution Context
console.log("\nFunction Execution Context:");
function outerFunction() {
    var z = 30;
    console.log("z inside outerFunction:", z);
}
outerFunction();

// Scope Chain and Lexical Environment
console.log("\nScope Chain and Lexical Environment:");
function outer() {
    var outerVar = "Outer";
    function inner() {
        var innerVar = "Inner";
        console.log("innerVar:", innerVar);
        console.log("outerVar inside inner:", outerVar);
    }
    inner();
}
outer();

// this inside arrow functions
console.log("\nThis inside arrow functions:");
const obj = {
    name: "John",
    greet: function() {
        console.log("Regular Function - This:", this);
    },
    greetArrow: () => {
        console.log("Arrow Function - This:", this);
    }
};
obj.greet();
obj.greetArrow();

// Short syntax for methods
console.log("\nShort syntax for methods:");
const newObj = {
    name: "Alice",
    greet() {
        console.log("Hello, " + this.name + "!");
    }
};
newObj.greet();

// Factory functions & memory-related problems
console.log("\nFactory functions & memory-related problems:");
function createObject(name) {
    return {
        name,
        getName() {
            return this.name;
        }
    };
}
const obj1 = createObject("Bob");
console.log("Object 1 name:", obj1.getName());
const obj2 = createObject("Charlie");
console.log("Object 2 name:", obj2.getName());

// First solution to memory-related problems
// Not the best approach
console.log("\nFirst solution to memory-related problems:");
function createObjectWithPrototype(name) {
    const obj = Object.create(createObjectWithPrototype.prototype);
    obj.name = name;
    return obj;
}
createObjectWithPrototype.prototype.getName = function() {
    return this.name;
};
const obj3 = createObjectWithPrototype("Dave");
console.log("Object 3 name:", obj3.getName());

// Prototype
console.log("\n__proto__ and [[prototype]]:");
console.log("Object 1 Prototype:", Object.getPrototypeOf(obj1));
console.log("Object 2 Prototype:", Object.getPrototypeOf(obj2));
console.log("Object 3 Prototype:", Object.getPrototypeOf(obj3));

// New keyword and Constructor function
console.log("\nNew keyword and Constructor function:");
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    return this.name;
};
const person1 = new Person("Eve");
console.log("Person 1 name:", person1.getName());

// Class keyword
console.log("\nClass keyword:");
class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const animal = new Animal("Dog");
console.log("Animal name:", animal.getName());

// Super keyword
console.log("\nSuper keyword:");
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    getDetails() {
        return `${this.getName()} - ${this.breed}`;
    }
}
const dog = new Dog("Buddy", "Labrador");
console.log("Dog details:", dog.getDetails());

// Method overriding
console.log("\nMethod overriding:");
class Cat extends Animal {
    getName() {
        return "Cat: " + super.getName();
    }
}
const cat = new Cat("Whiskers");
console.log("Cat name:", cat.getName());

// Getters and setters
console.log("\nGetters and setters:");
class Car {
    constructor(brand) {
        this._brand = brand;
    }
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }
}
const car = new Car("Toyota");
console.log("Car brand:", car.brand);
car.brand = "Honda";
console.log("Updated car brand:", car.brand);

// Static methods and properties
console.log("\nStatic methods and properties:");
class MathUtil {
    static add(x, y) {
        return x + y;
    }
}
console.log("Addition:", MathUtil.add(5, 3));
