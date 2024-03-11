// Intro to arrays
const myArray = [1, 2, 3, 4, 5];
console.log("Array:", myArray);

// Push pop shift unshift
myArray.push(6);
console.log("Array after push(6):", myArray);

const poppedElement = myArray.pop();
console.log("Popped element:", poppedElement);
console.log("Array after pop:", myArray);

const shiftedElement = myArray.shift();
console.log("Shifted element:", shiftedElement);
console.log("Array after shift:", myArray);

myArray.unshift(0);
console.log("Array after unshift(0):", myArray);

// Primitive vs reference data types
const myPrimitive = 10;
let myReference = [1, 2, 3];
const myPrimitiveCopy = myPrimitive;
const myReferenceCopy = myReference;

myPrimitiveCopy = 20; // Does not affect original
myReferenceCopy.push(4); // Affects original
console.log("Primitive Copy:", myPrimitiveCopy);
console.log("Original Primitive:", myPrimitive);
console.log("Reference Copy:", myReferenceCopy);
console.log("Original Reference:", myReference);

// Clone array & spread operator
const clonedArray = myArray.slice(); // Using slice
const clonedArray2 = [...myArray]; // Using spread operator
console.log("Cloned Array:", clonedArray);
console.log("Cloned Array 2:", clonedArray2);

// For loop
console.log("For Loop:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// Use const for creating arrays
const newArray = [1, 2, 3];
newArray.push(4);
console.log("New Array after push(4):", newArray);

// While loop in array
console.log("While Loop in Array:");
let index = 0;
while (index < myArray.length) {
    console.log(myArray[index]);
    index++;
}

// For of loop
console.log("For...of Loop:");
for (const item of myArray) {
    console.log(item);
}

// For in loop
console.log("For...in Loop:");
for (const index in myArray) {
    console.log(myArray[index]);
}

// Array destructuring
const [firstElement, secondElement, ...restOfArray] = myArray;
console.log("First Element:", firstElement);
console.log("Second Element:", secondElement);
console.log("Rest of the Array:", restOfArray);
