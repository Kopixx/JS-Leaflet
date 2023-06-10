// Save the URL
let queryUrl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Perform the API call
d3.json(queryUrl).then(function(data) {
    console.log(data)

    let sampleData = data.names;

    let dropMenu = d3.select("#selDataset");

    for (let i=0; i < sampleData.length; i++) {
        dropMenu.append("option").text(sampleData[i]).property("value", sampleData[i])
    };

    buildChart(sampleData[0]);

    buildMetaData(sampleData[0]);

});








// Define optionChanged function
function optionChanged(newsample) {
    buildChart(newsample);

    buildMetaData(newsample);
};


function buildChart(sampleID){
    d3.json(queryUrl).then(function(data) {


    })
};

function buildMetaData(sampleID) {
    d3.json(queryUrl).then(function(data) {


    })
};






// // THIS IS USING THE JSON FILE & LIMITED DATAPOINTS
// // Retrieve the first 5 data points
// console.log(data.samples);

// let smallSample = []

// for (let i = 0; i < 5; i++) {
//     smallSample.push(data.samples[i]);
// };

// console.log(smallSample);

// // Define the getData function
// function getData() {

//     //Select the dropdown menu
    // let dropMenu = d3.select("#dropdownMenu")

//     //Assign the dropdown menu to a variable
//     let dataset = dropMenu.property("value");

//     //Find the values
//     for (let i=0; i < smallSample.length; i++) {
        
//     }
// }

// // Create the bar chart
// d3.selectAll('#dropdownMenu').on("change", getData);

