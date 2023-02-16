"use strict";

let fruits = ["bananas", "apples", "oranges","mangoes","tomatoes"];
// let var1 = fruits(2);
// console.log(var1)
//
// let numberOfFruits = fruits.length;
// console.log('The number of fruits =>', numberOfFruits);
//
// let fruitsString = fruits.toString();
// console.log(`using toString on fruits =>`, fruitsString)
//
// let fruitAndNumbers = ["bananas", 2, "apples", 839374, undefined]
// console.log(fruitAndNumbers)
//
// const returnString = (input) => {
//     return input
// }

//for loop is only when you know how many times you are going to loop.

for(let i = 0; i < fruits.length; i++ ) {
    let fruit = fruits[i]
    console.log(fruit)

}

// fruits.forEach((fruit, i, array) => {
//     console.log('the element follows', fruit);
//     console.log('the index follows', i)
//     console.log('the array follows', array)
//
// });

let favFruits = [];
fruits.forEach((fruit, index, array) => {
    if(fruit === "apples" || fruit === "tomato") {
        favFruits.push(fruit)
    }
});
// console.log(favFruits)

