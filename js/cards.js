//This SHOULD get the API data from the API

function sendCards() {





}

POST /echo/post/json HTTP/1.1
Host: tdt.nighthawkcodingteams.cf/api/card/
Content-Type: application/json
Content-Length: 80

{
  "Id": 12345,
  "Customer": "John Smith",
  "Quantity": 1,
  "Price": 10.00
}

// Allows user input for "back" to be shown onclick of "Flip Card" button that is created in create-card().
function displayCard() {
    var doc = document.getElementById("body");

    var dispB = document.createElement("div");
    dispB.setAttribute("id", "displayBack");
    dispB.textContent = document.getElementById("back").value;
    const boxB = document.getElementById("body");
    boxB.appendChild(dispB);
  }

  // Allows user input for "front" to be shown and adds a button to "flip the card".
  function create_card() {
    const dispF = document.createElement("div");
    dispF.setAttribute("id", "displayFront");
    dispF.textContent = document.getElementById("front").value;

    const boxF = document.getElementById("body");
    boxF.appendChild(dispF);

    flipCard = document.createElement("button");
    flipCard.setAttribute("onclick", "displayCard()");
    flipCard.setAttribute("class", "cardButton");
    flipCard.innerHTML = "Flip Card";
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