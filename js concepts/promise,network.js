// Intro to Promises
console.log("Intro to Promises:");

// Function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Some data from API";
            resolve(data);
        }, 1000);
    });
}

// Promise and setTimeout
console.log("\nPromise and setTimeout:");
fetchData().then((data) => {
    console.log("Data received:", data);
});

// Promise.resolve and more about then method
console.log("\nPromise.resolve and more about then method:");
Promise.resolve("Resolved value").then((value) => {
    console.log("Resolved value:", value);
});

// Convert nested Callbacks to flat code using promises
console.log("\nConvert nested Callbacks to flat code using promises:");
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Data from Promise";
            resolve(data);
        }, 1000);
    });
}

fetchDataPromise()
    .then((data) => {
        console.log("Data:", data);
        return fetchDataPromise();
    })
    .then((data) => {
        console.log("Data from second call:", data);
    });

// Intro to Ajax, HTTP Request
console.log("\nIntro to Ajax, HTTP Request:");

// XHR requests
console.log("\nXHR requests:");
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log("XHR Response:", xhr.responseText);
    } else {
        console.error("Error:", xhr.statusText);
    }
};
xhr.onerror = function() {
    console.error("Request failed.");
};
xhr.send();

// Error handling in XHR requests

// XHR request Chaining

// Promisifying XHR requests and chaining using then method

// Fetch API
console.log("\nFetch API:");
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
    })
    .then((data) => {
        console.log("Fetch API Response:", data);
    })
    .catch((error) => {
        console.error("Fetch API Error:", error);
    });

// Error Handling in Fetch API

// Consume Promises with async and Await
console.log("\nConsume Promises with async and Await:");
async function fetchDataAsync() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        const data = await response.json();
        console.log("Async/Await Response:", data);
    } catch (error) {
        console.error("Async/Await Error:", error);
    }
}

fetchDataAsync();
