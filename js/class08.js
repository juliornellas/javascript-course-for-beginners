/**
 * Loops
 */

//FOR
//loops through a block of code a number of times
const cars = ['Fiat', 'Ford', 'Hyndai', 'Honda', 'Citroen', 'Peugeot'];

//Initial loop value; Condition to be executed; increment the initial count value of the loop
for(let i = 0; i < cars.length; i++){
    console.log(`The brand car is ${cars[i]}`);
}

//FOR IN
//Loops through the KEYS of an Object, Array
const student = {
    name: "Deivid",
    course: "Computer Technician",
    age: 17
}

//The property and the object you're looping for
for (let attr in student){
    console.log(`The KEY is: ${attr}. The value is: ${student[attr]}`)
}

for (let x in cars){
    console.log(`For In (Array): ${x}`)
}

for (let x in "ABCDEFG"){
    console.log(`For In (string): ${x}`)
}

//FOR OF
//Statement loops through the values of an iterable object
//Arrays, Strings, Maps, NodeLists, etc
for(let x of cars){
    console.log(`For of: ${x}`)
}

for (let x of "ABCDEFG"){
    console.log(`Letters: ${x}`)
}

for(let x of cars){
    console.log(`For Of: ${x}`)
}

//WHILE
//Loops through a block of code as long as a specified condition is true
let i = 0
while(i < 13){
    console.log(`While: ${i}`)
    i++;
}

let y = 0
do {
    console.log(`Do While: ${y}`)
    y++;
}
while (y < 13);

//BREAK
//Stop execution and jumps out the block of code
for (let i = 0; i < 10; i++) {
    if (i === 5) { 
        break;
    }
    console.log(`Break: ${i}`)
}

//CONTINUE
// Break just the iteration if a specified condition occurs and continues with the next iteration in the loop
for (let i = 0; i < 10; i++) {
    if (i === 3) { 
        continue;
    }
    console.log(`Continue: ${i}`)
  }