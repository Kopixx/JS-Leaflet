// An array of objects
let roster = [{
  name: "Ricky Grace",
  position: "Point Guard",
  madeTeam: true
},
{
  name: "James Crawford",
  position: "Centre",
  madeTeam: true
},
{
  name: "Kevin Lisch",
  position: "Shooting Guard",
  madeTeam: false
},
{
  name: "Andrew Vlahov",
  position: "Small Forward",
  madeTeam: false
},
{
  name: "Scott Fisher",
  position: "Power Forward",
  madeTeam: true
}
];

// Create a custom function to return players who made the team
function teamMates(person) {
  return person.madeTeam == true;
};

// Call the custom function with filter()
let team = roster.filter(teamMates);

// Display the results
console.log(team);

// Determine how many players made the cut
let teamCount = team.length;

// Display the results
console.log(`Number of Team Mates: ${teamCount}`);