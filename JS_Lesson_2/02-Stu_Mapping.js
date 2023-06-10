let heroines = [
    { name: "Rapunzel", age: 18 },
    { name: "Mulan", age: 16 },
    { name: "Anna", age: 18 },
    { name: "Moana", age: 16 }
  ];

console.log(heroines);

// Create an array of just the names from the heroines array
let mapOfNames = heroines.map(function(item) {
  return item.name;
});

console.log("Map of Names:", mapOfNames);

// Create an array of strings for each heroine's name, follow by a colon, followed by their age
let mapOfNamesandAges = heroines.map((item) => `${item.name}: ${item.age}`);

console.log("Map of Names & Ages:", mapOfNamesandAges)

