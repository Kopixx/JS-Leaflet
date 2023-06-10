let numArray = [1, 2, 3];

// Sort the array in descending order
numArray.sort(function compareFunction(firstNum, secondNum) {
    return secondNum - firstNum;
});

console.log(numArray);

//
let numArray2 = [3, 2, 1];

// Sort the array in ascending order
numArray2.sort(function compareFunction(firstNum, secondNum) {
    return firstNum - secondNum;
});

console.log(numArray2);

//
let numArray3 = [3, 2, 1];

// Sort the array in ascending order using arrow functions
numArray3.sort((a, b) => a - b);
console.log(numArray3)

//
let numArray4 = [1, 2, 3];

// Reverse the array
numArray4.reverse();
console.log(numArray4);