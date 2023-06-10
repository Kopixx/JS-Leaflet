// Use a this statement to console log the button element
d3.selectAll("button").on("click", function() {
    console.log(this);
});

// Use a this statement to select and style an element
d3.selectAll("li").on("click", function() {
    let listItem = d3.select(this);
    listItem.style("color", "purple");

    let listItemText = listItem.text();
    console.log(listItemText);
});
