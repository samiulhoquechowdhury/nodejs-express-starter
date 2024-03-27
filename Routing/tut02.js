/**
 * What is middleware in the context of routing?

Answer: Middleware in routing refers to functions that have access to the request and response objects and the next middleware function in the application's request-response cycle. Middleware functions can perform tasks such as logging, authentication, or modifying the request/response objects before passing control to the next middleware function.
 */

// How do you handle dynamic routes in Express.js?

// Answer:

app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`User ID: ${userId}`);
});


// Explain the difference between req.params, req.query, and req.body in Express.js.

// Answer:

// req.params: Contains route parameters extracted from the URL.
// req.query: Contains query parameters extracted from the URL's query string.
// req.body: Contains data submitted in the request body. It's commonly used with POST or PUT requests to send data to the server.


// What is route chaining in Express.js?

// Answer: Route chaining in Express.js involves defining multiple route handlers for a single route path. Each handler is executed in the order they are defined, and each handler can modify the request and response objects or terminate the request-response cycle prematurely.

// How do you handle 404 errors (not found) in Express.js?

// Answer:


app.use((req, res, next) => {
    res.status(404).send('404 - Not Found');
});



// Explain the concept of route nesting in Express.js.

// Answer: Route nesting in Express.js involves defining routes within other routes. This is useful for organizing route handlers for related endpoints or applying middleware specific to a group of routes.

// How can you implement authentication middleware for specific routes in Express.js?

// Answer:

function authenticate(req, res, next) {
    // Check if user is authenticated
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

app.get('/dashboard', authenticate, (req, res) => {
    res.send('Dashboard Page');
});