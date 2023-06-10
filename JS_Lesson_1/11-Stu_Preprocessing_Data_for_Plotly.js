let ratings = ['G', 'PG', 'PG-13', 'R'];

// Create a function to calculate the average of a metric by rating
function meanScore(userList) {
    sum = 0;

    for (let i = 0; i < userList.length; i++) {
        sum = sum + userList[i];
    }

    totalMean = sum / userList.length;

    return totalMean;
};

function avgByRating(obj) {
    GRating = [];
    PGRating = [];
    PG13Rating = [];
    RRating = [];
    
    for (let i=0; i < obj.length; i++) {
        if (obj[i]['rating'] == 'G') {
            GRating.push(obj[i]['rental_rate']);
        } else if (obj[i]['rating'] == 'PG') {
            PGRating.push(obj[i]['rental_rate']);
        } else if (obj[i]['rating'] == 'PG-13') {
            PG13Rating.push(obj[i]['rental_rate']);
        } else {
            RRating.push(obj[i]['rental_rate']);
        }
    };

    averagesRating = []

    GAvg = meanScore(GRating);
    averagesRating.push(GAvg);

    PGAvg = meanScore(PGRating);
    averagesRating.push(PGAvg);

    PG13Avg = meanScore(PG13Rating);
    averagesRating.push(PG13Avg);

    RAvg = meanScore(RRating);
    averagesRating.push(RAvg);

    return averagesRating

};

// Invoke the metric average function
let rentalAvg = avgByRating(films)

console.log(`Average Rental Rate per Rating category:`);
console.log(`G Rating: ${rentalAvg[0]}`);
console.log(`PG Rating: ${rentalAvg[1]}`);
console.log(`PG13 Rating: ${rentalAvg[2]}`);
console.log(`R Rating: ${rentalAvg[3]}`);

// Create a function to plot the average metric by rating results
function plotAvgByRating(obj) {
    avgByRating(obj);

    let trace1 = {
        x: ratings,
        y: averagesRating,
        type: 'bar'
    };
    
    let data = [trace1];

    let layout = {
        title: "Average Rental Rate per Rating Category"
    };

    Plotly.newPlot("plot", data, layout);
};


// Invoke the plot creating function
plotAvgByRating(films);