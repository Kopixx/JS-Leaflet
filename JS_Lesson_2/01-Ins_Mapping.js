let JSStages = ["confidence", "sadness", "confusion", "realisation", "debugging", "satisfaction"];

// Use the map method to create an array
let simpleArray = JSStages.map(function(item) {
    return item;
});

console.log("Map Array:", simpleArray);

// Use the map method to create an array with an index parameter
let indexArray = JSStages.map(function(item, index) {
    return `Stage ${index}: ${item}`;
});

console.log("Map Array with Index:", indexArray);

// Using map method over an array of objects
let students = [
    { name: "Malcolm", score: 80 },
    { name: "Zoe", score: 85 },
    { name: "Kaylee", score: 99 },
    { name: "Simon", score: 99 },
    { name: "Wash", score: 79 }
];

let studentArray = students.map(function(student) {
    return student.name;
});

console.log("Students:", studentArray);

// Arrow functions are a concise function syntax
let arrowArray = JSStages.map(item => item);

console.log('Arrow Map Array:', arrowArray);