/**
 * What is routing in web development, and why is it important?

Answer: Routing is the process of determining how an application responds to a client request to a particular endpoint. It maps endpoints (URLs) to specific handler functions. Routing is crucial as it allows developers to create multiple pages or API endpoints within a single application.
 */


/**
 * Explain client-side routing vs. server-side routing.

Answer:

**Client-side routing: In client-side routing, navigation within a web application is handled by JavaScript on the client side. This means that when a user clicks on a link, the browser doesn't request a new page from the server but instead loads the appropriate content dynamically.


Server-side routing: In server-side routing, navigation triggers requests to the server for each new page or resource. The server determines which content to send back to the client based on the requested URL.
 */


/**
 * 
 * How do you implement routing in a Node.js application using Express.js?
*/
// Answer:

const express = require('express');
const app = express();

// Define route handlers
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
