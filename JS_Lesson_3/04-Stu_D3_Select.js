// The new student and grade to add to the table
let newGrade = ["Wash", 79];

// Use D3 to select the table
let table = d3.select("table");
console.log(table);

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "grades table table-striped");

// Use D3 to select the table body
let tableBody = table.select("tbody");
console.log(tableBody);

// Append one table row `tr` to the table body
let tr1 = tableBody.append("tr");

// Append one cell for the student name
let td1 = tr1.append("td").text(newGrade[0]);

// Append one cell for the student grade
let td2 = tr1.append("td").text(newGrade[1]);
console.log(tableBody.html());