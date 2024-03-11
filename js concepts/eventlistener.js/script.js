// script.js

// Intro to events
console.log("Intro to events");

// This keyword inside eventListener callback
document.getElementById('button1').addEventListener('click', function() {
    console.log("This inside event listener:", this);
});

// Add events on multiple elements
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        console.log("Clicked on", this.textContent);
    });
});

// Event object
document.getElementById('button2').addEventListener('click', function(event) {
    console.log("Event object:", event);
    console.log("Target element:", event.target);
});

// How event listener works
document.getElementById('button3').addEventListener('click', function(event) {
    console.log("Event listener triggered.");
});

// Practice with events
// You can add more event handling code here as needed.

// More events
// Add more event listeners here.

// Event bubbling
// Event Capturing
// Event delegation

// Create Project using event delegation
document.getElementById('container').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        console.log("Clicked on", event.target.textContent);
    }
});
