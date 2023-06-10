// Using class, select the text of a html element
let text1 = d3.select(".text1").text();
console.log(text1);

// Using ID, select the text of a html element
let text2 = d3.select("#text2").text();
console.log(text2);

// Capture the html of a selection
let myLink = d3.select(".my-link").html();
console.log(myLink);

// Select the child element
let myLinkAnchor = d3.select(".my-link>a");
console.log(myLinkAnchor);

//Capture the child element's href attribute
let mlaAttribute = myLinkAnchor.attr("href");
console.log(mlaAttribute);

// Alter the text of an element
d3.select(".text1").text("I changed this text.");

// Alter an element's attribute
d3.select(".my-link>a").attr("href", "https://nytimes.com").text("This is now a link to NYTimes");
let myLinkAnchor2 = d3.select(".mylink>a");
console.log(myLinkAnchor2);

// Change the style of all selected elements
d3.selectAll("li").style("color", "blue");

// Add a new element
d3.select("ul").append("li").text("This is a new item");