// Greek God Names
//Greek name function
let greekNames = data.map(item => item.greekName);

console.log(greekNames);

// Greek Search Results function
let greekSearches = data.map(item => item.greekSearchResults);

console.log(greekSearches);

// Trace for the Greek Data
let trace1 = {
    x: greekNames,
    y: greekSearches,
    type: 'bar'
};

// Data trace array
data1 = [trace1];

// Apply the group barmode to the layout
let layout = {
    title: 'Greek God Search Results'
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data1, layout);
