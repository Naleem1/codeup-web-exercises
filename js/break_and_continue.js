"use strict";

    let userPrompt;

    while(true){
        let userPrompt = parseFloat(prompt('enter a odd number 1 - 50.'))
        if(userPrompt % 2 === 1 && userPrompt >= 1 && userPrompt <= 50) {

            break;
        }
    }
    for (let i = 1; i <= 49; i += 2) {
        if(i === userPrompt) {
            console.log(`Yikes! Skipping number ${i}`);
            continue;
        }
        console.log(`this number is odd ${i}`)
    }




