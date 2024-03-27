/*What is the purpose of the async and await keywords in JavaScript? How do they simplify working with Promises? Provide an example of using async and await to handle asynchronous operations.
async and await provide syntactic sugar for working with Promises, making asynchronous code look more like synchronous code and easier to understand. Example:
*/
async function readFileAsync() {
    try {
        const data = await readFilePromise;
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

readFileAsync();



