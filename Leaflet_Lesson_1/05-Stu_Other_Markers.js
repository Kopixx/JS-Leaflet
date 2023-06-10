// Create our initial map object.
// Set the longitude, latitude, and starting zoom level/
let myMap = L.map("map").setView([-37.8, 144.9], 5);

// Add a tile layer (the background map image) to our map.
// Use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Create a red circle over Melbourne
L.circle([-37.8136, 144.9631], {
    color: "red",
    fillColor: "red",
    radius: 50000
}).addTo(myMap);

// Create a line connecting Melbourne to Brisbane
let line = [
    [-37.8136, 144.9631],
    [-27.4705, 153.0260]
];

L.polyline(line, {
    color: "black"
}).addTo(myMap);

// Polygon covering Sydney to Blacktown to Gosford
let points = [
    [-33.8688, 151.2093],
    [-33.7661, 150.9127],
    [-33.4267, 151.3417]
];

L.polygon(points, {
    color: "purple",
    fillColor: "purple"
}).addTo(myMap);