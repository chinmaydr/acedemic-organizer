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
  fetch(url)
    .then() // how promises work is that you have a success and a rejection `then`. 
    // One of these runs if it works the other runs if it does not. Please read more
    // into this this is rather bare bones.
    .then()
  for (var key in stuff.jsonData) { //bro can u figure this out i need to study for a test ill come back if i can, i need to go sorry
    return key;
 }
}
function removeExcess(text){
  for(var i = 0; i < text.length; i++){
      text = text.replace('"', '');
      text = text.replace('"', '');
      text = text.replace( "\\n", '<br><br>')
      text = text.replace( "\\", '');
  }
  return  String(text);
  
}
function something(y){
  let dic_keys = Object.keys(y)
  let bod = document.getElementById("e"); // get body to append, performance
  //var sum = JSON.stringify(dic_keys['"summary"']);
  //var sumtext = JSON.stringify(y['"summary"']);
  //new_h1.innerHTML = removeExcess(sum);
  //new_div.innerHTML = removeExcess(sumtext);
  for (var key in dic_keys){
      var nkey = JSON.stringify(dic_keys[key]);
      var ntext = JSON.stringify(y[dic_keys[key]]); // assign key and text to variable
      if (ntext === '""' || nkey === '"External links"' || nkey === '"summary"' || nkey === '"url"') {
        continue;
      }
      new_div = document.createElement('div');
      new_h1 = document.createElement('h1');
      new_h1.innerHTML = removeExcess(nkey);
      new_div.innerHTML = removeExcess(ntext);
      bod.appendChild(new_h1);
      bod.appendChild(new_div);
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
    .then((x) => x.json())
    .then((y) => something(y))
    .catch(y => document.getElementById("demo").innerHTML = "ahhhh");
}