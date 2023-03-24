'use strict';

let saLat = 29.424349;
let saLon = -98.491142;
let currentCity = document.querySelector('#cCity');
let searchBar = document.querySelector('#search').value;


(async() => {
    // this populates the weather API
    async function getWeather() {
        let results = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${saLat}&lon=${saLon}&appid=${WEATHER_API_KEY}`);
        let data = await results.json();
        console.log(data)
        return data;
    }
    let weather = await getWeather();
    let coverage = weather.current.weather[0].main;

    console.log(coverage)
    // this populates the map
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/dark-v10',"width":"50%", // style URL
        center: [saLon, saLat], // starting position [lng, lat]
        zoom: 11, // starting zoom

    });



})();

