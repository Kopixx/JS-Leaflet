// An array of each country's numbers
let australia = Object.values(data.australia);
let brazil = Object.values(data.brazil);
let uk = Object.values(data.uk);
let mexico = Object.values(data.mexico);
let singapore = Object.values(data.singapore);
let southAfrica = Object.values(data.southAfrica);

// Create an array of category labels
let pieLabels = Object.keys(data.australia);

// Display the default plot
function init() {
    //Define the datapoints
    let trace1 = [{
        values: australia,
        labels: pieLabels,
        type:'pie'
    }];

    //Create and display the plot
    Plotly.newPlot("pie", trace1)
};

// Define updatePlotly function
function updatePlotly(newdata) {
    Plotly.restyle("pie", "values", [newdata])
};


// Create the pie chart
d3.selectAll("#dropdownMenu").on("change", getData);

// Define the updatePlotly function
function getData() {

    //Use d3 to select the dropdown menu
    let dropMenu = d3.select("#dropdownMenu");

    //Assign the dropdown menu to a variable
    let dataset = dropMenu.property("value");
    console.log(dataset);

    //Find the values 
    let pieData = []

    if (dataset === "Australia") {
        pieData = australia
    } else if (dataset === "Brazil") {
        pieData = brazil
    } else if (dataset === "UK") {
        pieData = uk
    } else if (dataset === "Mexico") {
        pieData = mexico
    } else if (dataset === "Singapore") {
        pieData = singapore
    } else if (dataset === "South-Africa") {
        pieData = southAfrica
    };

    console.log(pieData);

    //Display the updated pie chart
    updatePlotly(pieData);
};


// Display default plot
init();