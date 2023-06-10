let simpsons = [{
    name: "Homer",
    age: 45
  }, {
    name: "Lisa",
    age: 8
  }, {
    name: "Marge",
    age: 43
  }, {
    name: "Bart",
    age: 10
  }, {
    name: "Maggie",
    age: 1
  }];

// Create a filter based on age
function selectYounger(item) {
    return item.age < 30
};

// Use filter() with the function as its argument
let youngSimpsons = simpsons.filter(selectYounger);

// Print result to the console
console.log(youngSimpsons);