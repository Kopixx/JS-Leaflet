// Creating the initial map object; longitude, latitude, zoom & plot id connection
let myLeaflet = L;

let myMap = myLeaflet.map("map", {
    center: [-28.01, 153.4],
    zoom: 13
});

// Adding the tile layer using addTo(); the background map image
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

