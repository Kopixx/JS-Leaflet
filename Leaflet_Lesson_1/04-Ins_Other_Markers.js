// Create an initial map object
// Set the longitude, latitude, and the starting zoom level
let myMap = L.map("map").setView([-37.81, 144.96], 9);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Create a new marker
L.marker([-37.81, 144.96]).addTo(myMap);

// Create a circle and pass attribute options
L.circle([-37.81, 144.96], {
    color: "green",
    fillColor: "green",
    radius: 6000,
}).addTo(myMap);

// Create a polygon and pass attribute options
L.polygon([
    [-37.81, 144.96],
    [-37.91, 144.86],
    [-37.81, 144.86]  
], {
    color: "yellow",
    fillColor: "yellow",
    fillOpacity: 0.75
}).addTo(myMap);

// Create a polyline using line coordinates, and pass attribute options
let line = [
    [-37.81, 144.96],
    [-37.91, 144.86],
    [-37.81, 144.80],
    [-37.81, 144.90]
];

L.polyline(line, {
    color: "red"
}).addTo(myMap);

// Create a rectangle and pass attribute options
L.rectangle([
    [-37.31, 144.36],
    [-37.51, 144.56]  
], {
    color: "black",
    weight: 3,
    stroke: true
}).addTo(myMap);