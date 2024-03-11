// Intro to objects
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Dot vs Bracket Notation
console.log("Dot Notation - Name:", person.name);
console.log("Bracket Notation - Age:", person['age']);

// Iterate objects
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Computed properties
const propName = "email";
person[propName] = "john@example.com";
console.log("Computed Property - Email:", person.email);

// Spread operator in objects
const newPerson = { ...person, profession: "Engineer" };
console.log("New Person:", newPerson);

// Object Destructuring
const { name, age, city } = person;
console.log("Destructured Name:", name);
console.log("Destructured Age:", age);
console.log("Destructured City:", city);

// Objects inside Array
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

// Nested Destructuring
const [, { name: secondName }] = users;
console.log("Second User Name:", secondName);
