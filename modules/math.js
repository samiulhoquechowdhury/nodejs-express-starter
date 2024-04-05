// function add (a,b) {
//     return a + b;
// };

// function sub(a, b) {
//     return a - b;
// }


//we have to export the module to use this in different module
// module.exports = {
//     addFn : add,//we can change the module name and the new name in the main module.
//     subFn : sub,
// };



//another way to export is ...

exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;