/**
 * Question: Create a route that handles GET requests to /products and returns a JSON array of product objects. Each product object should have id, name, and price properties.

Implementation:
 */

const express = require('express');
const app = express();

const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
