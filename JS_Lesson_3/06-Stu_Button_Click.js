// Random generation of a Star Wars episode number
let text = d3.select(".star-wars").text(Math.floor(Math.random() * 9) + 1);

// Select the upvote and downvote buttons
// Upvote
let upvote = d3.select(".upvote");

// Downvote
let downvote = d3.select(".downvote");

// Select the counter h3 element
let counter = d3.select(".counter");

// BONUS
// Save each vote information to an array
let votes = [];

// Attach a click handler function to upvote
upvote.on("click", function() {
    let newCount = parseInt(counter.text()) + 1;
    counter.text(newCount);

    //BONUS
    let voteType = "Upvote";
    let currentCount = newCount;
    let voteInfo = [voteType, currentCount];
    votes.push(voteInfo);

    console.log(counter.text());
    console.log(votes);
});

// Attach a click handler function to downvote
downvote.on("click", function() {
    let newCount = parseInt(counter.text()) - 1;
    counter.text(newCount);

    //BONUS
    let voteType = "Downvote";
    let currentCount = newCount;
    let voteInfo = [voteType, currentCount];
    votes.push(voteInfo);

    console.log(counter.text());
    console.log(votes);
});


