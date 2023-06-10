//console.log(data);

// Create a custom function to return Roman gods with more than 1 million search results
function popularRomans(i) {
    return i.romanSearchResults > 100000000;
};

// Call the custom function with filter()
let popGods = data.filter(popularRomans);

// Trace for the Roman Data
let trace1 = {
    x: popGods.map(row => row.romanName),
    y: popGods.map(row => row.romanSearchResults),
    type: "bar"
};

// Data trace array
let traceData = [trace1];

// Apply title to the layout
let layout = {
    title: "Roman God Search Results"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);