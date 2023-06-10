// Create a map object.
let myMap = L.map("map", {
    center: [-30.8, 130.9],
    zoom: 5
});
  
// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
  
// Define a function for Marker Size where radius = population
function markerSize(population) {
    return Math.sqrt(population) * 50;
};

// Import city data; name, location coordinates and population
let cities = [
    {
      name: "Sydney",
      location: [-33.8688, 151.2093],
      population: 5361466
    },
    {
      name: "Melbourne",
      location: [-37.8136, 144.9631],
      population: 5096298
    },
    {
      name: "Brisbane",
      location: [-27.4705, 153.0260],
      population: 2582007
    },
    {
      name: "Perth",
      location: [-31.9523, 115.8613],
      population: 2141834
    },
    {
      name: "Adelaide",
      location: [-34.9285, 138.6007],
      population: 1378413
    }
  ];

// Create a for loop that creates 1 marker for each city
for (let i = 0; i < cities.length; i++) {
    L.circle(cities[i].location, {
        radius: markerSize(cities[i].population),
        color: "red",
        fillColor: "red"
    }).bindPopup(`<h1>${cities[i].name}</h1> <hr> <h3>Population: ${cities[i].population.toLocaleString()}</h3>`).addTo(myMap);
};