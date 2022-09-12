/**
 * Conditional statements
 * IF: a block of code will be executed, if condition is TRUE
 * ELSE: a block of code will be executed, if condition is FALSE
 * ELSE IF: a block of code will be executed, if the first condition is FALSE
 * SWITCH: list of blocks of codes to be executed 
 */

let hour = 16;
//IF
// if(hour >= 12){
//     console.log("Let's get lunch!")
// }

//IF... ELSE
// if(hour >= 12){
//     console.log("Let's get lunch!")
// }else{
//     console.log("Opss, you've to wait!")
// }

//IF.. ELSE IF... ELSE
if(hour < 12){
    console.log('Breakfast time!');
}else if(hour < 15){
    console.log('Lunch time!');
}else{
    console.log('Dinner time!');
}

//SWITCH
//Switch cases use strict comparison (===)
let today = new Date().getDay()
console.log('TODAY', today)

switch (today) {
case 0:
    day = "Sunday";
    break;
case 1:
    day = "Monday";
    break;
case 2:
    day = "Tuesday";
    break;
case 3:
    day = "Wednesday";
    break;
case 4:
    day = "Thursday";
    break;
case 5:
    day = "Friday";
    break;
case 6:
    day = "Saturday";
}

console.log('SWITCH EXAMPLE', day)

//Default option
let choice = ""

switch(choice){
    case "pizza":
        console.log('Let\'s eat pizza!')
        break;
    case "hamburguer":
        console.log("Let's eat hamburguer!")
        break;
    default:
        console.log("Let's eat salad!")
}

//Many switch cases to the same code
let food = ""
switch(food){
    case "lettuce":
    case "spinach":
        console.log('Leaf greens!')
        break;
    default:
        console.log('Junk food!')
}
