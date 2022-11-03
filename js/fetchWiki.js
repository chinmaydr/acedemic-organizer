// Source: W3SCHOOLS.COM
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Source: W3SCHOOLS.COM
// This block makes the "enter" key functional as a "search" button
var input = document.getElementById("search");
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submit").click();
  }
});

// Formats the stuff
// Written by varalu
function format() {
  var userSearch = document.getElementById("search").value; // Gets val of input (Azeem)
  const words = userSearch.split(" ");
  let new_string = "";
  for (let i = 0; i < words.length; i++) {
    new_string += words[i];
    if (words.length <= 1) {
      // breaks if only one word
      break;
    }
    new_string += "_";
  }
  return new_string; // returns the new string
}

function formatText(stuff) {
  let formatted = format(); // uses format procedure to MANAGE COMPLEXITY
  let url = "https://tdt.nighthawkcodingteams.cf/api/wiki/" + formatted;
  import(requests);

  for (var key in stuff.jsonData) { //bro can u figure this out i need to study for a test ill come back if i can, i need to go sorry
    return key;
 }
}

// Written by Varalu & Azeem
// Fetches from Wiki API and pretty prints
function paste() {
  // Converts user input into URL for API fetch
  document.getElementById("myForm").style.display = "none";
  let formatted = format(); // uses format procedure to MANAGE COMPLEXITY
  let url = "https://tdt.nighthawkcodingteams.cf/api/wiki/" + formatted;

  // API fetch and format
  fetch(url)
    .then((x) => x.text())
    .then((y) => (document.getElementById("demo").innerHTML = y));
}
