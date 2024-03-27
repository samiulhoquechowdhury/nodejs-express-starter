/**
 * Question: Create a route that handles PUT requests to /users/:userId and updates the details of the user specified by userId.

Implementation:
 */

const express = require('express');
const app = express();

app.use(express.json());

let users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' }
];

app.put('/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const { name } = req.body;
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        users[index].name = name;
        res.send('User details updated');
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
