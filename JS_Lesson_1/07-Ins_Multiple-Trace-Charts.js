// Create the first trace

let trace1 = {
    x: [0, 1, 2, 3, 4, 5],
    y: [0, 5, 10, 15, 20, 25],
    type: "bar"
};

// Create the second trace

let trace2 = {
    x: [0, 1, 2, 3, 4, 5],
    y: [0, 1, 4, 9, 16, 25],
    type: "scatter"
  };

// Create the data array consisting of both traces

let data = [trace1, trace2];

// Create the new plot
Plotly.newPlot("plot", data);
