// Iterables
const iterable = ["one", "two", "three"];
for (const item of iterable) {
    console.log("Iterable Item:", item);
}

// Sets
const set = new Set();
set.add("apple");
set.add("banana");
set.add("apple"); // Duplicate values are ignored
console.log("Set:", set);

// Maps
const map = new Map();
map.set("name", "John");
map.set("age", 30);
console.log("Map:", map);

// Object.assign
const obj1 = { name: "John" };
const obj2 = { age: 30 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log("Merged Object:", mergedObj);

// Optional chaining
const person = {
    name: "John",
    address: {
        city: "New York"
    }
};

console.log("Optional Chaining - Name:", person?.name);
console.log("Optional Chaining - Address:", person?.address?.city);
