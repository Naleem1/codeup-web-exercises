"use strict";

function isOdd(num) {
    if(num % 2 === 0) {
        return false
    }else
        return true
}
// isOdd(4)

const isEven = (num) => {
    if(num % 2 === 0){
        return true
    }else
        return false
}
isEven(2)

const identity = (input) => {
    return input
}
// console.log(identity("hello world"))

const isFive = (num) => {
    if(typeof num === 'number') {
        return num === 5
        }else
            return false
}
isFive()
const addFive = (input) => {
    return input + 5
}
addFive()

const isMultipleOfFive = (input) => {
    if(input % 5 === 0) {
        return true
    }
}
isMultipleOfFive()

const isThree = (input) => {
    if(input === 3) {
        return true
    }else
        return false
}
isThree()