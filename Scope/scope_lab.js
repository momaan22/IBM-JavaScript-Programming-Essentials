// Global scope
var globalVar = "this is global varibale";
let globalLet = "this is also global , but scoped with let";
const globalConst = "this global costant";

{
    // Block scope 
    var blockVar = "this is block-scoped varibale";
    let blockLet = "this is block-scoped let";
    const blockConst = "this block-scoped costant";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError