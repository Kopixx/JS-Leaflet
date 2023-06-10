// An array of cities and their locations
let cities = [
    {
      name: "Paris",
      location: [48.8566, 2.3522]
    },
    {
      name: "Lyon",
      location: [45.7640, 4.8357]
    },
    {
      name: "Cannes",
      location: [43.5528, 7.0174]
    },
    {
      name: "Nantes",
      location: [47.2184, -1.5536]
    }
  ];

// Create an array to store all City Markers
let cityMarkers = [];

// Create a new marker per city & push to the cityMarkers array
for (let i = 0; i < cities.length; i++) {
    cityMarkers.push(
        L.marker(cities[i].location, {
        }).bindPopup(`<h1>${cities[i].name}</h1>`)
    );
};

// Add the cityMarkers to a layer group
let cityLayer = L.layerGroup(cityMarkers);

// Define the options for our tile layers (save each to a variable)
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Save all tile layers to an array
let baseMaps = {
    Street: street,
    Topography: topo
};

// Save all overlays to an array
let overlays = {
    Cities: cityLayer
};

// Create a map object with default layers
let myMap = L.map("map", {
    center: [46.2276, 2.2137],
    zoom: 6,
    layers: [street, cityLayer]
});

// Pass all map layers into layer control & add layer control to the map
L.control.layers(baseMaps, overlays).addTo(myMap);