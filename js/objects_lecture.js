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
