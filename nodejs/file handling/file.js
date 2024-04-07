const fs = require('fs')

//sync...
// fs.writeFileSync('./test.txt', "Hello World!");

// fs.writeFile("./test.txt", "Hello from Async", (err) => {});

// const result = fs.readFileSync("./cont.txt", "utf-8");
// console.log(result);

// fs.readFile("./cont.txt", "utf-8", (err, result)=> {
//     if(err) {
//         console.log("Error", err)
//     } else {
//         console.log(result);
//     }
// });

// fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString());

// fs.appendFileSync('./test.txt', `${Date.now()}Hey there!\n`);

// fs.cpSync('./test.txt', "./copy.txt");

// fs.unlinkSync('./copy.txt');

console.log(fs.statSync('./test.txt'));
fs.mkdirSync('my-docs');