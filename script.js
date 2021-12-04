let auto;

function playGame() {
  //get cards using math.random
  let cardnumber = getRandomInt(cardInfo.length);
  let cardnumber2 = getRandomInt(cardInfo.length);
  //set source of cards from small_cards file
  document
    .getElementById("card")
    .setAttribute("src", "/small_cards/" + cardInfo[cardnumber].filename);
  document
    .getElementById("card2")
    .setAttribute("src", "/small_cards/" + cardInfo[cardnumber2].filename);
  //set title of cards from small_cards file
  document
    .getElementById("card")
    .setAttribute("title", "" + cardInfo[cardnumber].filename);
  document
    .getElementById("card2")
    .setAttribute("title", "" + cardInfo[cardnumber2].filename);
  //game logic
  if (cardInfo[cardnumber].value > cardInfo[cardnumber2].value) {
    document.getElementById("output").innerHTML = "Player 1 Wins!";
  } else if (cardInfo[cardnumber].value === cardInfo[cardnumber2].value) {
    document.getElementById("output").innerHTML = "Tie";
  } else if (cardInfo[cardnumber].value < cardInfo[cardnumber2].value) {
    document.getElementById("output").innerHTML = "Player 2 Wins!";
  }
}
//attempt at auto play
function playGame2() {
  let cardnumber = getRandomInt(cardInfo.length);
  let cardnumber2 = getRandomInt(cardInfo.length);
  document
    .getElementById("card")
    .setAttribute("src", "/small_cards/" + cardInfo[cardnumber].filename);
  document
    .getElementById("card2")
    .setAttribute("src", "/small_cards/" + cardInfo[cardnumber2].filename);
  document
    .getElementById("card")
    .setAttribute("title", "" + cardInfo[cardnumber].filename);
  document
    .getElementById("card2")
    .setAttribute("title", "" + cardInfo[cardnumber2].filename);
  if (cardInfo[cardnumber].value > cardInfo[cardnumber2].value) {
    document.getElementById("output").innerHTML = "Player 1 Wins!";
  } else if (cardInfo[cardnumber].value === cardInfo[cardnumber2].value) {
    document.getElementById("output").innerHTML = "Tie";
  } else if (cardInfo[cardnumber].value < cardInfo[cardnumber2].value) {
    document.getElementById("output").innerHTML = "Player 2 Wins!";
  }
  auto = setInterval(playGame2, 3000);
}
function stop() {
  clearInterval(auto);
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
