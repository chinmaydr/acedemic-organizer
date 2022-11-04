//This SHOULD get the API data from the API

// Allows user input for "back" to be shown onclick of "Flip Card" button that is created in create-card().
function displayCard() {
    var doc = document.getElementById("body");

    var dispB = document.createElement("div");
    dispB.setAttribute("id", "displayBack");
    dispB.setAttribute("class", "displayB");
    dispB.textContent = document.getElementById("back").value;
    const boxB = document.getElementById("body");
    boxB.appendChild(dispB);
  }

  // Allows user input for "front" to be shown and adds a button to "flip the card".
  function create_card() {
    const dispF = document.createElement("div");
    dispF.setAttribute("id", "displayFront");
    dispF.setAttribute("class", "displayF");
    dispF.textContent = document.getElementById("front").value;


    const boxF = document.getElementById("body");
    boxF.appendChild(dispF);

    linebr = document.createElement("br");
    linebr2 = document.createElement("br");

    flipCard = document.createElement("button");

    flipCard.setAttribute("onclick", "displayCard()");
    flipCard.setAttribute("class", "cardButton");
    flipCard.innerHTML = "Flip Card";

    dispF.appendChild(linebr);
    dispF.appendChild(linebr2);

    dispF.appendChild(flipCard);
    return dispF;
  }

  /* Idk why this is here but Varalu put it there.
  Seems like an unnecessary step but ok ig lol
  We can just run create_card() onclick of Display Cards button */
  function buttonAccessById() {
    // Accessing the button element by using id attribute
    var doc = document.getElementById("body");
    ncard = create_card();
    doc.appendChild(ncard);
  }
  function format2(text){
      const words = text.split(" ");
      let new_string = "";
      for (let i = 0; i < words.length; i++) {
        new_string += words[i];
        if (words.length <= 1) {
          // breaks if only one word
          break;
        }
        new_string += "-";
      }
      return new_string; // returns the new string
  }
  function unparse(text){
    const words = text.split("-");
      let new_string = "";
      for (let i = 0; i < words.length; i++) {
        new_string += words[i];
        if (words.length <= 1) {
          // breaks if only one word
          break;
        }
        new_string += " ";
      }
      return new_string; // returns the new string
  }


  
  function SaveCard() {
    let inputFront = format2(document.getElementById("front").value);
    let inputBack = format2(document.getElementById("back").value);

    let url = "https://tdt.nighthawkcodingteams.cf/api/card/create/"+inputFront+"_"+inputBack;
    fetch (url, {
      method :'POST'
    })

  }

  function LoadCard(front,back){
    let url = "https://tdt.nighthawkcodingteams.cf/api/card/create/"+front+"_"+back;
    fetch (url, {
      method :'GET'
    })
    .then(x=> ForEach(createcard())
    )
  }

  function createcard() {


  }