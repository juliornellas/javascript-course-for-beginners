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