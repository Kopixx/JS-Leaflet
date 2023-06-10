// Initialise the page with a default plot
function init() {
    // Define the data points
    let data = [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16]
    }];

    //Create and display the plot
    Plotly.newPlot("plot", data)
};

// Call updatePlotly() whne a change occurs in the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// Define the updatePlotly function
function updatePlotly() {

    // Use D3 to select the dropdown menu
    let dropMenu = d3.select("#selDataset");

    // Assign the dropdown menu to a variable
    let dataset = dropMenu.property("value");

    // Initialise x and y arrays
    let x = [];
    let y = [];

    // if statement for dataset 1
    if (dataset === 'dataset1') {
        x = [1, 2, 3, 4, 5];
        y = [1, 2, 4, 8, 16];    
    }

    // else statement for dataset 2
    else if (dataset === 'dataset2') {
        x = [10, 20, 30, 40, 50];
        y = [1, 10, 100, 1000, 10000];    
    }

    // Restyle the plot
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
};

init();