
/*
*Q:What are Promises in JavaScript? How do they improve asynchronous code readability and maintainability compared to callbacks? Provide an example of creating and consuming a Promise.
Ans :Promises represent the eventual completion or failure of an asynchronous operation, allowing chaining of multiple asynchronous operations and handling errors more cleanly than callbacks. Example:
*/


const readFilePromise = new Promise((resolve, reject) => {
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(data);
    });
});

readFilePromise.then(data => console.log('File content:', data))
               .catch(err => console.error('Error reading file:', err));