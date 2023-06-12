// Save the URL
let queryUrl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Perform the API call
d3.json(queryUrl).then(function(data) {
    console.log(data)

    let sampleNames = data.names;

    let dropMenu = d3.select("#selDataset");

    for (let i=0; i < sampleNames.length; i++) {
        dropMenu.append("option").text(sampleNames[i]).property("value", sampleNames[i])
    };

    buildChart(sampleNames[0]);

    buildMetaData(sampleNames[0]);

});



// Define optionChanged function
function optionChanged(newsample) {
    
    buildChart(newsample);

    buildMetaData(newsample);
};


function buildChart(sampleID){
    d3.json(queryUrl).then(function(data) {

        //Retrieve the sample data
        for (let i=0; i < data.names.length; i++) {
            if (sampleID == data.samples[i].id) {
                //Save the sample
                let sampleData = data.samples[i];

                //Convert the Y values to string
                let y_values_bar = [];

                for (let j=0; j < 10; j++) {
                    y_values_bar.push("OTU " + String(sampleData.otu_ids[j]))
                };

                //Declare the trace, obtaining Top 10 Values
                let trace_bar = {
                    x: sampleData.sample_values.slice(0,10).reverse(),
                    y: y_values_bar.reverse(),
                    type: 'bar',
                    orientation: 'h'
                };
                
                console.log(trace_bar.x, trace_bar.y);

                //Save trace array
                let trace_bar_array = [trace_bar];

                //Create plot
                Plotly.newPlot("bar", trace_bar_array);

                //Bubble Chart data values
                let y_values_bubble = []

                for (let j=0; j < sampleData.sample_values.length; j++) {
                    y_values_bubble.push(sampleData.otu_ids[j])
                };

                let trace_bubble = {
                    x: sampleData.sample_values,
                    y: y_values_bubble,
                    mode: 'markers',
                    marker: {
                        color: y_values_bubble,
                        size: sampleData.sample_values
                    }   
                }
            }

        }

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

