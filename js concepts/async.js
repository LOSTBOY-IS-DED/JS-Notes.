// JavaScript is both synchronous and asynchronous

// setTimeout()
console.log("setTimeout() demonstration:");
setTimeout(() => {
    console.log("This is executed after 2 seconds.");
}, 2000);

// setTimeout() with 0 millisecond
console.log("\nsetTimeout() with 0 millisecond:");
setTimeout(() => {
    console.log("This is executed after 0 milliseconds.");
}, 0);

// Callback Queue
console.log("\nCallback Queue demonstration:");
setTimeout(() => {
    console.log("This is executed first.");
}, 0);

console.log("This is executed second.");

setTimeout(() => {
    console.log("This is executed third.");
}, 0);

// setInterval() example - Little project with setInterval
console.log("\nsetInterval() example - Little project with setInterval:");
let counter = 0;
const intervalId = setInterval(() => {
    console.log("Counter:", counter);
    counter++;
    if (counter === 5) {
        clearInterval(intervalId); // Stop the interval after 5 iterations
    }
}, 1000);

// Callbacks in general
console.log("\nCallbacks in general:");
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Alice", sayBye);

// Callbacks in asynchronous programming
console.log("\nCallbacks in asynchronous programming:");
function fetchData(callback) {
    setTimeout(() => {
        const data = "Some data from API";
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log("Received data:", data);
});

// Callback Hell and Pyramid of Doom
console.log("\nCallback Hell and Pyramid of Doom:");
setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
            setTimeout(() => {
                console.log("Step 4");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
