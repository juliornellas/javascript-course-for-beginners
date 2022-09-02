/**
 * Comparsion
 */
//  ==	equal to
//  ===	equal value and equal type
//  !=	not equal
//  !== not equal value or not equal type
//  > greater than
//  < less than
//  >= greater than or equal to
//  <= less than or equal to

console.log('equal to', 5 == 5)
console.log('equal to - forced conversion', 5 == "5")
console.log('not equal', 5 != "5")
console.log('equal to - string', "Texto" == "texto")
console.log('equal to', 5 === "5")
console.log('equal to', 5 !== "5")
console.log('equal to', "5" === "5")
console.log('greater than', 9 > 10)
console.log('less than', 9 < 10)
console.log('greater than or equal to', 9 >= 10)
console.log('less than or equal to', 9 <= 10)

/**
 * Logical Operators
 */
//  &&	And
//  ||	or
//  !	not
let x = 6
let y = 3
console.log('&& And', (x < 10 && y > 1))
console.log('|| Or', (x == 5 || y == 5))
console.log('! Not', !(x == y))

/**
 * Ternary
 */
let age = 17;
let vote = (age < 16) ? "Too young":"Old enough";
console.log(vote)