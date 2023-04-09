document.getElementById("zoomSubmit").addEventListener('click', event => {
    event.preventDefault();
    map.setZoom(document.getElementById("zoom").value);
});

document.getElementById("setMarkerButton").addEventListener('click', event=>{
    event.preventDefault();
    const address = document.getElementById("setMarker").value;
    geocode(address, MAPBOX_API_TOKEN).then(coords=>{
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        map.setCenter(coords);
    });
});

//[
//   -98.48839,
//   29.42739
// ]

const restaurants =[
    {name: "Texas Sizzle", longitude: -98.48839, latitude: 29.42739, info: "Great cheese steak for less than $10"},
    {name: "Sushishima", longitude: -98.52265, latitude: 29.534795, info: "Japanese Mackerel sashimi made from a whole fish"},
    {name: "Pacific Moon", longitude: -98.47755, latitude: 29.57837, info: "Outstanding Teriyaki Chicken Melt"}
];
restaurants.forEach(restaurant=>{
    const element = document.createElement("div");
    element.className = 'marker';
    const marker = new mapboxgl.Marker(element)
        .setLngLat([restaurant.longitude, restaurant.latitude])
        .addTo(map);
    const popup = new mapboxgl.Popup()
        .setHTML(`
            <p class="popup">${restaurant.name}</p>
            <p>${restaurant.info}</p>
                `);
    marker.setPopup(popup);
});

document.querySelector("#hideMarkers").addEventListener('click', event=>{
    document.querySelectorAll(".mapboxgl-marker").forEach(svg=>{
        svg.style.display = "none";
    });
});