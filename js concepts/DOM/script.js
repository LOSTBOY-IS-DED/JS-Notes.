// script.js

// Async vs defer
// Select elements using id
const header = document.getElementById('header');

// querySelector
const main = document.querySelector('main');

// textContent & innerText
header.textContent = "HTML and CSS Crash Course";

// Change the styles of elements using js
header.style.backgroundColor = "#333";
header.style.color = "#fff";

// Get and set attributes
const link = document.querySelector('a');
link.setAttribute('href', 'https://www.example.com');

// Select multiple elements and loop through them
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
    paragraph.style.fontWeight = 'bold';
});

// innerHTML
main.innerHTML = "<p>This is a paragraph added dynamically.</p>";

// Deeply understand dom tree, root node , element nodes, text nodes
const rootNode = document.getRootNode();
console.log("Root Node:", rootNode);
document.childNodes.forEach(node => {
    console.log("Node Type:", node.nodeType);
});

// classList
const element = document.querySelector('.example');
element.classList.add('highlight');
element.classList.remove('example');

// Add new elements to page
const newElement = document.createElement('div');
newElement.textContent = "New element";
document.body.appendChild(newElement);

// Create elements
const paragraphElement = document.createElement('p');
paragraphElement.textContent = "This is a new paragraph.";
main.appendChild(paragraphElement);

// Insert adjacent elements
const existingElement = document.querySelector('.existing');
existingElement.insertAdjacentHTML('afterend', '<div>New sibling element</div>');

// Clone nodes
const clonedElement = existingElement.cloneNode(true);
document.body.appendChild(clonedElement);

// More methods to add elements on page

// How to get the dimensions of the element
const dimensions = existingElement.getBoundingClientRect();
console.log("Dimensions:", dimensions);
