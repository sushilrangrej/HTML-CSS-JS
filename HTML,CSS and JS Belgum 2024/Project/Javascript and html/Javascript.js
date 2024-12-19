// script.js
// This will run when the page loads
window.onload = function() {
    console.log("Hello World in console!");
};

// Alternative ways to display Hello World
function differentWays() {
    // 1. Using alert
    alert("Hello World!");

    // 2. Writing to document
    document.write("Hello World!"); // Note: This will overwrite the page

    // 3. Using console
    console.log("Hello World!");

    // 4. Creating new element
    const newElement = document.createElement("p");
    newElement.textContent = "Hello World!";
    document.body.appendChild(newElement);

    // 5. Template literal for dynamic content
    const name = "World";
    const message = `Hello ${name}!`;
    console.log(message);
}

// DOM manipulation example
function updateContent() {
    // Change multiple elements
    const elements = document.getElementsByTagName("p");
    for(let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "Hello World!";
    }
}

// Event listener example
document.addEventListener("DOMContentLoaded", function() {
    // Code here runs after DOM is fully loaded
    console.log("DOM is ready!");
});