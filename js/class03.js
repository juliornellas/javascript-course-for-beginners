/**
 * Class 03
 */

let fruits = ["banana", "apple", "grape", "watermelon","pineapple"];

console.log(fruits)
console.log('Access item:', fruits[4])

console.log('Size of fruits', fruits.length)
console.log("Sort the items", fruits.sort())
console.log("Reverse the items", fruits.reverse())
console.log("Include the items", fruits.includes("apple"))

if (fruits.includes("apple")){
    console.log("Yes, we have apple pie!")
}

//Take the first position and remove it from the array
console.log('Take the first position', fruits.shift())
console.log('Updated', fruits)

//Take the last position and remove it from the array
console.log('Take the first position', fruits.pop())
console.log('Updated', fruits)

//Include in the first position
fruits.unshift("pear")
console.log('Include the first position', fruits)

//Include in the last position
fruits.push("orange")
console.log('Include the last position', fruits)

// SLICE - remove a piece
// Slice doesn't change the original array
/**
 * O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado
 */
let x = fruits.slice(3)
console.log('Original array', fruits)
console.log('Slice array', x)

//Set the interval (index to start, number of the element to finish)
// let y = fruits.slice(1, 3)
let y = fruits.slice(1, -1)
console.log('Slice delimited array', y)

/**
 * SPLICE
 * O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
 */

let brands = ["Ford", "Fiat", "Ferrari", "Mercedez", "Chevrolet"]
console.log('Brand Array', brands)

//Start position 2, remove 0 elements and add another
brands.splice(2, 0, "Hyundai")
console.log('New Brand Array', brands)

let removeItem = brands.splice(3, 1)
console.log('New Brand After Array', brands)
console.log('Removed Brand', removeItem)

// FOREACH - Running through array
// fruits.forEach(function(fruit){
//     console.log(`The fruit is ${fruit}`)
// })
// fruits.forEach((item)=>{
//     console.log(`The fruit is ${item}`)
// })
fruits.forEach((item)=>console.log(`The fruit is ${item}`))