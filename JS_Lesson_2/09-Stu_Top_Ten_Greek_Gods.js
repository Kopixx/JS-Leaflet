// Sort the data by Greek search results descending
let sortGreek = data.sort(function compareFunction(a, b) {
    return b.greekSearchResults - a.greekSearchResults;
});

// Slice the first 10 objects for plotting
let firstTen = sortGreek.slice(0,10);

// Reverse the array to accommodate Plotly's defaults
let revTen = firstTen.reverse();

// Trace for the Greek Data
let trace1 = {
    x: revTen.map(row => row.greekSearchResults),
    y: revTen.map(row => row.greekName),
    type: 'bar',
    orientation: 'h'
};

// Data array
let traceData = [trace1];

// Apply a title to the layout
let layout = {
    title: 'Top 10 Greek Gods (Highest No. of Searches)'
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);