// Create a map object
let myMap = L.map("map", {
    center: [-25.57, 133.77],
    zoom: 5
});

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Create a marker for each city
//Mount Isa
let MIMarker = L.marker([-20.7264, 139.4930], {
    title: "Mount Isa Marker"
}).addTo(myMap);

MIMarker.bindPopup("City: Mount Isa<br>" + "Population: 22,000");

//Mackay
let MMarker = L.marker([-21.1434, 149.1868], {
    title: "Mackay Marker"
}).addTo(myMap);

MMarker.bindPopup("City: Mackay<br>" + "Population: 77,848");