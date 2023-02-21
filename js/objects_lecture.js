"use strict";

// const currentWeather = {
//     temperature: 54.4,
//     humidity: 28,
//     clouds:0,
//     windDirection: "NNE"
// }

const hourlyWeather = [
    {
        time: "08:00",
        temperature: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temperature: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temperature: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temperature: 84.49,
        feels_like: 89.24
    }
];

hourlyWeather.forEach(hourlyForecast => console.log(hourlyWeather.temperature));


const fighter = {
    name: "Najee",
    hitPoints: 18,
    maxDamage: 8,
    attack: function(enemy) {
        console.log(`${enemy.name} has ${enemy.hitPoints}`)
        console.log(this.name + "attacks!");
        const damage = Math.ceil(Math.random() * this.maxDamage);
            console.log(`${this.name} does ${damage} points of damage`)
        enemy.hitPoints -= damage;
            console.log(`${enemy.name} has ${enemy.hitPoints} left`)
    }
}

const fighter2 = {
    name: "Bigfoot",
    hitPoints: 17,
    maxDamage: 10,
    attack: function() {
        console.log(this.name + "attacks")
    }
}

const monster = {
    name: "Goblin",
    hitPoints: 8,
    maxDamage: 6
}

const gameLogic = {
    attack: function(attacker, defender) {
        console.log(`${defender.name} has ${defender.hitpoint} hit points.`)
        console.log(`${attacker.name} attacks!`)
        const damage = Math.ceil(Math.random() * attacker.maxDamage)
        defender.hitpoint -= damage
        console.log(`${defender.name} now has ${defender.hitpoint} hit points left! `)
    }
}