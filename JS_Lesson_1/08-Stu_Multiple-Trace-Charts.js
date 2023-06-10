// Declare empty arrays
let xData = [];
let yGreekData = [];
let yRomanData = [];

// For loop to store each data point
for (let i = 0; i < searchResults.length; i++) {
    xData.push(searchResults[i]['pair']);
    yGreekData.push(searchResults[i]['greekSearchResults']);
    yRomanData.push(searchResults[i]['romanSearchResults']);
};

// Create trace1
let trace1 = {
    x: xData,
    y: yGreekData,
    type: 'bar',
    name: 'Greek'
};

// Create trace2
let trace2 = {
    x: xData,
    y: yRomanData,
    type: 'bar',
    name: 'Roman'
};

// Create the data array of both traces
let data = [trace1, trace2];

// Define the layout
let layout = {
    title: "Greek vs. Roman Gods"
};

// Create the plot
Plotly.newPlot("plot", data, layout);