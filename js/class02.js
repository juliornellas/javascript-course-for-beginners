/**
 * String methods
 */

let string = "JavaScript crash course";

console.log(string.length)
console.log(string.charAt(2))
console.log(string.endsWith("e"))
console.log(string.startsWith("Java"))
console.log(string.includes("cript"))
console.log(string.indexOf("crash"))
console.log(string.match(/[A-Z]/g))
console.log(string.repeat(3))
console.log(string.replace("JavaScript", "HTML & CSS"))
console.log(string.split(" "))
console.log(string.slice(4, 10))// start index and size
console.log(string.substring(4, 10))// start index and size
console.log(string.substr(4, 10)) // start and end index
console.log(string.toLowerCase())
console.log(string.toUpperCase())
console.log(" JavaScript ".trim())

//Template Literal
//Back-tics syntax
let text = `JavaScript crash course`;

//Quotes
let text2 = `I'm a "programmer"`;

//Multiline strings
let text3 = `
    You can write
    many lines as
    you want!
`;
console.log('Text 3', text3)

//Interpolation with variable
let firstName = "Tiradentes"
let text4 = `Hello ${firstName}, how're you?`;
console.log('Text 4', text4)

//Expression
let price = 10;
let vat = 0.25;

let total = `Total: ${(price * (1 + vat)).toFixed(2)}`;
console.log(total)