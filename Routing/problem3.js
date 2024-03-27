/**
 * Question: Create a route that handles POST requests to /login and expects JSON data containing username and password fields. Validate the credentials and return an appropriate response.

Implementation:
 */

const express = require('express');
const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Perform authentication logic here (e.g., check credentials against database)
    if (username === 'user' && password === 'password') {
        res.send('Login successful');
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
