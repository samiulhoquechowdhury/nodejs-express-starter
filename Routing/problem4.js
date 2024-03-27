/**
 * Question: Implement route chaining to define middleware that logs the timestamp of each incoming request and then handles the request to /about.

Implementation:
 */

const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] Request received: ${req.method} ${req.url}`);
    next();
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
