/**
 * Class 02
 */

//Regular
function sayHello(){
    console.log("Hi Folks!");
}

sayHello()

//Arrow function
const sayHiTo = () => {
    console.log('Hi guys!')
}

sayHiTo();

//Passing parameters
//Regular
function sum(value1, value2){
    console.log('The sum value is: ', value1+value2)
}

sum(7, 6);
//Arrow function
const minus = (value1, value2) => {
    console.log('The min value is: ', value1-value2)
}
minus(33,20);

//Return
const divide = (number1, number2) => {
    // return number1 / number2;
    // let result = number1 / number2;
    //Tax to pay
    // let tax = result * 1.1
    // return tax;
    return number1 / number2 * 1.1
}

console.log('The result is: ', divide(39, 3))

// Optimize Arrow function
// const optimize = (x, y)=> {
//     return x + y;
// }
const optimize = (x, y) => x + y
console.log('Optimized', optimize(9, 4))