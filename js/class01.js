/*
Class 01
*/

// 1.1 Linked to external JS
// Variables and Scope
// var name = "Saci";
let lastName = "Perere";
const age = 33;

name = "Harry";
lastName = "Potter";
// age = 18;

console.log(`Hello ${name} ${lastName}. Your age is ${age}!`)
var name = "Saci";

// 1.3 Scope
function run() {
    var foo = "Foo";
    let bar = "Bar";

    console.log(foo, bar); // Foo Bar

    if(true){
        var moo = "Mooo"
        let baz = "Bazz";
        console.log(moo, baz); // Mooo Bazz
    }

    console.log(moo); // Mooo
    console.log(baz); // ReferenceError
}

run();