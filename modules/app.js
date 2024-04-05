const math = require('./math') //require function is present only in nodejs not in js

// we can also werite it like

// const { add, sub } = require('./math')


// console.log(add(2,5));
console.log('Math value is :', math.add(4, 1));
console.log('Math value is :', math.sub(4, 1));