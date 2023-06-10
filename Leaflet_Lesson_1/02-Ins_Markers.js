// Creating the initial map object; longitude, latitude, zoom & plot id connection
let myMap = L.map("map", {
    center: [-28.01, 153.4],
    zoom: 13
});

// Adding the tile layer using addTo(); the background map image
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Creating a new marker object; pass longitude, latitude, draggable, title.
let marker1 = L.marker([-28.01, 153.4], {
    draggable: true,
    title: "My First Marker"
}).addTo(myMap);

// Binding a popup to our marker
marker1.bindPopup("Hello There!");