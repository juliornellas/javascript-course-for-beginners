/**
 * Type conversion
 */

//Number
console.log('Number: ', Number("3.14"))
console.log('Number: ', Number(Math.PI))
console.log('Number: ', Number("    "))
console.log('Number: ', Number(""))
console.log('Number: ', Number("99 88"))
console.log('Number: ', Number("John"))
console.log('Number:', Number(false))     // returns 0
console.log('Number:', Number(true))      // returns 1

//Check
let n = 9;
let conv = n.toString()
console.log('Typeof :', typeof Number(13).toString())
console.log('Typeof :', typeof conv)

//String
console.log('Convert to String: ', Date().toString())

console.log('Convert to String boolean: ', String(false))      // returns "false"
console.log('Convert to String boolean: ', String(true))       // returns "true"

console.log(5 + null)    // returns 5         null is converted to 0
console.log("5" + null)  // returns "5null"   null is converted to "null"
console.log("5" + 2)     // returns "52"      2 is converted to "2"
console.log("5" - 2)     // returns 3         "5" is converted to 5
console.log("5" * "2")   // returns 10        "5" and "2" are converted to 5 and 2