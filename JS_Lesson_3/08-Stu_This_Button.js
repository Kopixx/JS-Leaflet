// Randomly select an episode number for Star Wars
let text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 9) + 1);

// Select the counter h3 element
let counter = d3.select(".counter");
console.log(counter.html());

// Select the buttons and attach a click handler function
d3.selectAll("button").on("click", function() {

    //Create a variable for the button selected
    let selectedButton = d3.select(this);
    console.log(selectedButton.html());

    // Create a variable to hold the increment or decrement
    let voteType = selectedButton.text();
    console.log(voteType);

    let change = 0;
    
    if (voteType.includes("Upvote")) {
        change = change + 1;
    } else {
        change = change - 1;
    }
    console.log(change);

    //Create a variable to hold the current counter value
    let currentCount = parseInt(counter.text());
    console.log(currentCount);

    //Update the counter value
    let newCount = currentCount + change;

    //Set the counter text to the new count
    counter.text(newCount);
    console.log(counter.text());
});

