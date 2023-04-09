import {planetData, peopleData, getEyeColor} from "./starwars-utils.js";

/*
    TODO: Using separation of concern principles, module syntax, and
        async/await, create a series of code that:
        - uses the star wars api: https://swapi.dev/
        - returns a specific planet
        - returns the eye color of a specific character
        - returns all of the data on a specific movie
        *BONUS* - Add it onto the DOM however you want
        ...
        Your code should have:
        - a main thread that is easy to read
        - separate js file(s) for function declarations
        - proper syntax to resolve promises (don't cook your ticket)

 */

(async () => {
    let planet = await planetData(2)
    let people = await peopleData(3)


})();