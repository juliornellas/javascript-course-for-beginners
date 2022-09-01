/**
 * Objects
 */

let car = {
    type: "Ford",
    model: "Focus",
    color: "White"
}

console.log("My car", car)
console.log("Model", car.model)
console.log("Color", car['color'])

//Copy
let copy = {...car}
copy.color = "Grey"
console.log('Copy', copy)
console.log('Original', car)

//Not a copy
let notCopy = car
notCopy.color = "Pink"
console.log('Not a copy', notCopy)
console.log('Original', car)

// Merge
let options = {
    gearbox: 5,
    break: true
}

console.log("Options", options)

//Srpead operator
let newObj = {...car, ...options}
console.log("New Object", newObj)

newObj.color = 'Red';
console.log('Change color of the newObj',  newObj)
console.log('Color of the first object',  car)

//Object.assign()
// let otherObj = Object.assign({}, car, options)
let otherObj = Object.assign(car, options)
console.log('Other new Object', otherObj)

otherObj.color = 'Blue';
console.log('Change color of the otherObj',  otherObj)
console.log('Color of the first object',  car)

//Shallow copy of spread operator
let bike = {
    color: "Red",
    details: {
        pedals: 2,
        wheels: 2,
        break: true
    }
}

console.log('Bike', bike)

// let copyBike = {...bike}
// console.log('Copy of Bike', copyBike)

// copyBike.color = "Black"
// copyBike.details.break = false
// console.log('Change Copy of Bike', copyBike)
// console.log('Bike', bike)

// let copyBike2 = {...bike, details: {...bike.details}}
// console.log('Copy of Bike 2', copyBike2)

// copyBike2.details.break = false
// console.log('Change Copy of Bike 2', copyBike2)
// console.log('Bike', bike)

