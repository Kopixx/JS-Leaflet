// Copy across the variables and objects from activity 2.
let name_string = 'Kali';

let title = `${name_string}'s First Plotly Chart`;

let books = ["Sharp Objects", "The Hunger Games", "Gone Girl"];

let timesRead = [5, 3, 4];

let myData = {
    nameString: name_string,
    favouriteBooks: books,
    timesRead: timesRead,
    age: 24
};

console.log('Hello!');

// Create a trace1 object and assign x & y values for a vertical bar chart
let trace1 = {
    x: books,
    y: timesRead
};

// Assign trace to an array
let data1 = [trace1]

// Declare layout
let layout = {
    title: "Favourite Books vs. Times Read"
};

//Display plot
Plotly.newPlot("plot", data1, layout)