/* 
**Q.What is asynchronous programming, and why is it important in JavaScript/Node.js development

*Ans :Asynchronous programming allows code to execute non-blocking operations, enabling the program to continue executing other tasks while waiting for certain operations (such as I/O operations or API requests) to complete. In JavaScript/Node.js, where many operations are I/O-bound, asynchronous programming is crucial for ensuring high concurrency and responsiveness.


** Q.Explain the difference between synchronous and asynchronous code execution in JavaScript. Provide an example of each.

*Ans: Synchronous code executes line by line, blocking further execution until each statement completes. Asynchronous code, on the other hand, allows statements to execute independently, and the program continues executing without waiting for the asynchronous operation to complete. Example:
*/

// Synchronous code
console.log("First");
console.log("Second");

// Asynchronous code
setTimeout(() => console.log("Async operation complete"), 1000);
console.log("Continuing execution...");

/*
*How do callbacks help handle asynchronous operations in Node.js? Provide a simple example of using a callback to handle asynchronous file I/O.
Callbacks are functions passed as arguments to asynchronous functions to be executed once the operation is complete. Example:

*/
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});
