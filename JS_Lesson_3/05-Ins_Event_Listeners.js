// Selecting the button by ID
let button = d3.select("#click-me");

// Creating a function that triggers when the button is clicked
function handleClick() {
    console.log("A button was clicked!");
    console.log(d3.event.target);
};

// Use the on function to attach the event to the handler function
button.on("click", handleClick);

// Selecting the input element by ID
let inputField = d3.select("#input-field");

// Creating and attaching a handler function inline
inputField.on("change", function() {
    let newText = d3.event.target.value;
    console.log(newText);
});
