// Print function
function printHello() {
    console.log("Hello!");
};

printHello();

// Sum function
function addNumbers(a, b) {
    return a + b;
};

console.log(addNumbers(2, 5));

// Iterate through an array function
function listLoop(userList) {
    for (let i=0; i < userList.length; i++) {
        console.log(userList[i]);
    }
};

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
listLoop(friends);

// Functions can call on other functions
function doubleAddition(c, d) {
    let total = addNumbers(c, d) * 2;
    return total;
};

console.log(doubleAddition(2, 5));
