let movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

// Function to find the mean
function meanScore(userList) {
    sum = 0;

    for (let i = 0; i < userList.length; i++) {
        sum = sum + userList[i];
    }

    totalMean = sum / userList.length;

    return totalMean;
};

console.log(`The Mean is: ${meanScore(movieScore)}`);

// Function to find the Variance
function varianceScore(userList) {
    sumVar = 0;

    for (let i = 0; i < userList.length; i++) {
        sumVar = sumVar + ((userList[i] - meanScore(userList))^2);
    };

    totalVar = (sumVar) / (userList.length - 1);

    return totalVar;
};

console.log(`The Variance is: ${varianceScore(movieScore)}`);

// Function to find the Standard Deviation
function standevScore(userList) {
    totalStandDev = Math.sqrt(varianceScore(userList));

    return totalStandDev;
};

console.log(`The Standard Deviation is: ${standevScore(movieScore)}`);