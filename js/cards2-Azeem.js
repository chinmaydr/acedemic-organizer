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


  

  function saveCard() {
    let inputFront = format2(document.getElementById("front").value);
    let inputBack = format2(document.getElementById("back").value);

    let url = "https://tdt.nighthawkcodingteams.cf/api/card/create/"+inputFront+"_"+inputBack;
    fetch (url, {
      method :'POST'
    })

  }
  
  
// Copied code from https://www.sitepoint.com/loop-through-json-response-javascript/#:~:text=(async%20()%20%3D%3E%20%7B%0A%20%20async,)()%3B%0A%0A//%20Array(30)%20%5B%20%7B%E2%80%A6%7D%2C%20%7B%E2%80%A6%7D%2C%20%7B%E2%80%A6%7D%2C%20%7B%E2%80%A6%7D%2C%20%7B%E2%80%A6%7D%2C%20%7B%E2%80%A6%7D%2C%20%7B%E2%80%A6%7D%2C%20%7B%E2%80%A6%7D%2C%20%7B%E2%80%A6%7D%2C%20%7B%E2%80%A6%7D%2C%20%E2%80%A6%20%5D
function importCard(){
  (async () => {
    async function getCards() {
      const url = `https://tdt.nighthawkcodingteams.cf/api/card`;
  
      const response = await fetch(url);
      const lol = await response.json();
  
      return lol;
    }
  
    const cards = await getCards();
    console.log(cards);
    
  })();
}



  function createCard(front,back) {;
    let newCard = document.createElement("div");
    newCard.setAttribute("class", "cardFront");
    newCard.textContent = front;
    const displayFront = document.getElementById("body");
    displayFront.appendChild(newCard);

    let flipCardContainer = document.createElement("div");
    flipCardContainer.setAttribute("class", "flipCardContainer");
    let flipCard = flipCardContainer.createElement("button");
    flipCard.setAttribute("class", "btn");
    flipCard.innerHTML = "Flip Card";
    const displayFlip = document.getElementById("body");
    displayFlip.appendChild(flipCardContainer);


  }