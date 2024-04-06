//L1-Hello World
//L1-Get request -> route params -> Query params


import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const mockUser = [
    {id : 1, username: "samiul", displayName:"Samiul"},
    {id : 2, username: "rahul", displayName:"Rahul"},
    {id : 3, username: "anish", displayName:"Anish"}
]

app.get('/', (req, res) => {
    res.status(201).send({msg :"Hello From Server!"});
});

app.get('/api/users', (req, res) => {
    res.send(mockUser);
});


//route params
app.get('/api/users/:id/', (req, res) => {
    console.log(req.params);
    const parsedId = parseInt(req.params.id)
    console.log(parsedId);
    if (isNaN(parsedId)) return res.status(400).send( {msg : "Bad request"});

    const findUser = mockUser.find((user) => user.id === parsedId);
    if(!findUser) return res.sendStatus(404);
    return res.send(findUser);
})



app.get('/api/products', (req, res) => {
    res.send([
        { id: 123, name: "Chicken brest", price: 67.6},
        { id: 54, name: "Coconut milk", price: 17.5},
        { id: 151, name: "Apple Juice", price: 4.6}
    ])
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})


//routes.....

//localhost:3000
//localhost:3000/user
//localhost:3000/products