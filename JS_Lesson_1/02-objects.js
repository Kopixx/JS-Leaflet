// objects are collections of properties. Properties are key-value pairs
let city = {
    name: "Queensland",
    state: "Brisbane",
    area: 1342.7,
    nickname: "Brisneyland"
};

// to access a property from a JavaScript object, there are two options
// 1) Bracket notation, similar to python
console.log(city['name']); // output: "Brisbane"

// 2) Dot notation (the preferred convention in JavaScript)
console.log(city.state); // output: "Queensland"

// properties can be overwritten by assigning a new value
city.nickname = "Brisvegas";
console.log(city);

// to add a property to an existing object, simply assign a value to a new key
city.population = 1272999;
console.log(city);
