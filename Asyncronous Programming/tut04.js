/*
Explain what is meant by the term "callback hell" and how Promises or async/await can help mitigate it. Provide an example demonstrating callback hell and its resolution using Promises or async/await.
Callback hell refers to the situation where multiple nested callbacks make the code difficult to read and maintain. Promises or async/await can flatten the code structure and improve readability. Example:
*/


readFile('file1.txt', (err, data1) => {
    if (err) {
        console.error('Error reading file 1:', err);
        return;
    }
    readFile('file2.txt', (err, data2) => {
        if (err) {
            console.error('Error reading file 2:', err);
            return;
        }
        console.log('File 1 content:', data1);
        console.log('File 2 content:', data2);
    });
});

// Resolution using Promises:


readFilePromise('file1.txt')
    .then(data1 => readFilePromise('file2.txt'))
    .then(data2 => {
        console.log('File 1 content:', data1);
        console.log('File 2 content:', data2);
    })
    .catch(err => console.error('Error:', err));


// Resolution using async/await:


async function readFiles() {
    try {
        const data1 = await readFilePromise('file1.txt');
        const data2 = await readFilePromise('file2.txt');
        console.log('File 1 content:', data1);
        console.log('File 2 content:', data2);
    } catch (err) {
        console.error('Error:', err);
    }
}

readFiles();