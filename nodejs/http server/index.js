const http = require('http')
const fs = require('fs')

const PORT = process.env.PORT || 8000;
const server = http.createServer((req, res) => {
    console.log(res.getHeaders);
    res.end("Hello from server.");
});

server.listen(8000, ()=>console.log(`Server started at port ${PORT}`));

