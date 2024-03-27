/**
 * Question: Implement a route that handles GET requests to /users/:userId and returns details of a user based on the provided userId. Assume user data is stored in an array of objects.

Implementation:
 */

const express = require('express');
const app = express();

const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' }
];

app.get('/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const user = users.find(user => user.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
