// const { url } = require("inspector");

// function myMiddleware(req, res, next){
//     //do something with the req and res.
//     console.log('Request:', res,url)
//     next(); // call the next middleware in chain.
// };

// app.use(myMiddleware);


//Application level middleware

const express = require('express')

const app = express()

app.use((res, req, next) => {
    console.log('Time:',Date.now())
    next();
})


//This example shows a route and its handler function(middleware system). The function handle
app.use('/user/:id', (req, res, next) => {
    res.send('USER')
});