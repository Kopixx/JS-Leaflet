// An array that contains all the information needed to create city and state markers
// Population Australian Bureau of Statistics and the Centre for Population
let locations = [
    {
      coordinates: [-33.8688, 151.2093],
      state: {
        name: "New South Wales",
        population: 8189266
      },
      city: {
        name: "Sydney",
        population: 5361466
      }
    },
    {
      coordinates: [-37.8136, 144.9631],
      state: {
        name: "Victoria",
        population: 6649159
      },
      city: {
        name: "Melbourne",
        population: 5096298
      }
    },
    {
      coordinates: [-27.4705, 153.0260],
      state: {
        name: "Queensland",
        population: 5221170
      },
      city: {
        name: "Brisbane",
        population: 2582007
      }
    },
    {
      coordinates: [-31.9523, 115.8613],
      state: {
        name: "Western Australia",
        population: 2681633
      },
      city: {
        name: "Perth",
        population: 2141834
      }
    },
    {
      coordinates: [-34.9285, 138.6007],
      state: {
        name: "South Australia",
        population: 1961504
      },
      city: {
        name: "Adelaide",
        population: 1378413
      }
    }
  ];

// Create a function to determine the marker size based on the population
function markerSize(population) {
    return Math.sqrt(population) * 50;
};

// Define arrays to hold the created city and state markers.
let cityMarkers = [];
let stateMarkers = [];

// Loop through locations, and create the city and state markers.
for (let i = 0; i < locations.length; i++) {
    // Set the marker radius for the state by passing the population to the markerSize() function.
    stateMarkers.push(
      L.circle(locations[i].coordinates, {
        stroke: false,
        fillOpacity: 0.75,
        color: "white",
        fillColor: "white",
        radius: markerSize(locations[i].state.population)
      })
    );
  
  // Set the marker radius for the city by passing the population to the markerSize() function.
  cityMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "purple",
      fillColor: "purple",
      radius: markerSize(locations[i].city.population)
    })
  );
}
 
// Create the base layers.
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Create two separate layer groups: one for the city markers and another for the state markers.
let cities = L.layerGroup(cityMarkers);
let states = L.layerGroup(stateMarkers);

// Create a baseMaps object
let baseMaps = {
    Street: street,
    Topography: topo
};

// Create an overlayMaps object
let overlayMaps = {
    "State Population": states,
    "City Population": cities
};

// Create the map object, default layers street, states and cities
let myMap = L.map("map", {
    center: [-30.8, 130.9],
    zoom: 5,
    layers: [street, states, cities]
});

// Create layer control and add to the map
L.control.layers(baseMaps, overlayMaps).addTo(myMap);