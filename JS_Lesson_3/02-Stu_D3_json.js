const url = "https://api.spacexdata.com/v3/roadster";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the Roadster JSON data and print it
dataPromise.then(function(data) {
    console.log(data);
});

const url2 = "https://api.spacexdata.com/v3/capsules";

// Promise Pending
const dataPromise2 = d3.json(url2);
console.log("Data Promise 2: ", dataPromise2);

// Fetch and print the Capsule JSON data
dataPromise2.then(function(x) {
    console.log(x)
});
