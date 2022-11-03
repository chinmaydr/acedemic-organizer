function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  /* CREDIT TO W3SCHOOLS
  This block makes the "enter" key functional as a "search" button */

  var input = document.getElementById("search");
  // Execute a function when the user presses a key on the keyboard
  input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("submit").click();
    }
  });
  


  function format(){
    var userSearch = document.getElementById("search").value;
    const words = userSearch.split(" ");
    let new_string = "";
    for (let i = 0; i < words.length; i++) { 
      new_string += words[i];
      if (words.length <= 1){
        break; 
      }
      new_string += "_";
    }
    return new_string
  }



  function paste(){
  document.getElementById("myForm").style.display = "none"
  let formatted = format();
  let url = "https://tdt.nighthawkcodingteams.cf/api/wiki/" + formatted;

  fetch(url)
    .then((x) => x.text())
    .then((y) => (document.getElementById("demo").innerHTML = y));
  }