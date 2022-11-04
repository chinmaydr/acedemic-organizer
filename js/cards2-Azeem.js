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
  
  
// Copied code from https://www.sitepoint.com/loop-through-json-response-javascript/
//function importCard(){
  //(async () => {
    async function getCards() {
      const url = `https://tdt.nighthawkcodingteams.cf/api/card`;
  
      const response = await fetch(url);
      const lol = await response.json();
      /*
      console.log("lol "+lol);
      console.log("type lol "+ typeof(lol));
      console.log("response "+ response);
      console.log("type response" + typeof(response));
      */
      return lol;
    }

 /*   
    const cards = await getCards();
    console.log(cards);
    
  })();
 */ 
//}


async function initCards(){
  array_of_dic = await getCards();
  let keys = Object.keys(array_of_dic);
  for (var key in keys){
    front = unparse(array_of_dic[key]["title"]);
    back = unparse(array_of_dic[key]["substance"]);
    createCard(front, back);
  }
}







function showBack(i) {
  let backContainer = document.createElement("div");
  backContainer.setAttribute("id", "displayBack");
  backContainer.setAttribute("class", "cardBack");
  backContainer.textContent = i;
  const boxB = document.getElementById("body");
  boxB.appendChild(backContainer);

}
function createCard(front,back) {;
    let newCard = document.createElement("div");
    newCard.setAttribute("class", "cardFront");
    newCard.textContent = front;
    const displayFront = document.getElementById("body");
    displayFront.appendChild(newCard);

    linebr = document.createElement("br");
    linebr2 = document.createElement("br");
    linebr3 = document.createElement("br");


    newCard.appendChild(linebr);
    newCard.appendChild(linebr2);
    newCard.appendChild(linebr3);

    let flipCard = document.createElement("button");
    newCard.appendChild(flipCard);
    flipCard.setAttribute("id", "cardtoFlip");
    flipCard.setAttribute("class", "btn");
    flipCard.innerHTML = "Flip Card";
    flipCard.setAttribute("onclick", "showBack(back)")
  }
