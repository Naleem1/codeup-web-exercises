'use strict';

(async () => {
    let saLat = 29.424349;
    let saLon = -98.491142;
    let currentWeather = await document.querySelector('#weatherDiv');
    let forecastWeather = await document.querySelector('#forecast');

    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // this populates the map
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/dark-v10',
        "width": "50%", // style URL
        center: [saLon, saLat], // starting position [lng, lat]
        zoom: 11, // starting zoom
    });
    // search bar
    document.addEventListener('change', async () => {
        let searchBarInput = document.querySelector('#search').value;
        let results = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchBarInput}.json?access_token=${MAPBOX_API_TOKEN}`);
        let data = await results.json();
        let coordinates = data.features[0].center;

        map.setCenter(coordinates);

        saLat = coordinates[1];
        saLon = coordinates[0];
        await getWeather();
    });

    // Set marker
    async function Marker() {
        let marker = new mapboxgl.Marker({
            color: "#FFFFFF",
            draggable: true
        }).setLngLat([saLon, saLat])
            .addTo(map);

        // this makes my marker move
        marker.on('drag', async () => {
            const lngLat = marker.getLngLat();
            saLat = lngLat.lat;
            saLon = lngLat.lng;
            await getWeather();
        });
    }
    // this populates the weather API and pushes the weather into the current day and forecast
    async function getWeather() {
        let results = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${saLat}&lon=${saLon}&appid=${WEATHER_API_KEY}&units=Imperial`);
        let data = await results.json();
        let dailyWeather = data.daily

        // clear div
        forecastWeather.innerHTML = '';

        dailyWeather.forEach((day, index) => {
            if (index < 4) {
                let dayOfWeek = daysOfWeek[(new Date(day.dt * 1000)).getDay()];
                forecastWeather.innerHTML += `
          <div class="daily-weather">
            <div class="column">${Math.round(day.temp.min) + '' + 'F'}</div>
            <div class="column align-right">
              <div class="row align-content-center">${dayOfWeek}</div>
              <div class="row align-content-center">${day.weather[0].main}</div>
            </div>
          </div>
        `;
            }
        });

        // clear div
        currentWeather.innerHTML = '';

        dailyWeather.forEach((day, index) => {
            if (index === 6) {
                let dayOfWeek = daysOfWeek[(new Date(day.dt * 1000)).getDay()];
                currentWeather.innerHTML += `
          <div class="daily-weather">
            <div class="column current">${Math.round(data.current.temp) + '' + 'F'}</div>
            <div class="column align-right">
              <div class="row align-content-center">${dayOfWeek}</div>
              <div class="row align-content-center">${data.current.weather[0].main}</div>
            </div>
          </div>
        `;
            }
        });

        return data;
    }


    await getWeather();
    await Marker()
})();