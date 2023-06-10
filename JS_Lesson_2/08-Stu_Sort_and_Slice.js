// An unsorted array
let numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];

// Sort the array in descending order and assign the results to a variable
let descNum = numArray.sort(function compareFunction(firstNum, secondNum) {
    return secondNum - firstNum;
});

console.log(`Descending Order: ${descNum}`);

// Reverse the array order
let ascNum = descNum.reverse();

console.log(`Ascending Order: ${ascNum}`);

// Slice the first five elements of the sortedAscending array, assign to a variable
firstFive = ascNum.slice(0,5);

console.log(`First 5 Ascending Numbers: ${firstFive}`);