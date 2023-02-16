"use strict";


    let i = 0;
        while(i <= 16){
            console.log(Math.pow(2,i))
            i++
}
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
}

    let coneInventory = randomNumber(50,100);

    do{
        let conesWanted = randomNumber(1,5);
        if(conesWanted > coneInventory) {
            console.log(`cannot sell you ${conesWanted}, I only have ${coneInventory}`)

        } else {
            console.log(`I have ${conesWanted} sold`)
            coneInventory = coneInventory - conesWanted
        }
        console.log(`${coneInventory} left`)
    } while(coneInventory > 0);
    console.log("Yay! I've sold them all!")