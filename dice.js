var randomDice1 = Math.floor(6 * Math.random() + 1);
var randomDice2 = Math.floor(6 * Math.random() + 1);

var newDice1 = `images/dice${randomDice1}.png`;
var newDice2 = `images/dice${randomDice2}.png`;

document.querySelectorAll(".dice .img1")[0].setAttribute("src", newDice1);
document.querySelectorAll(".dice .img2")[0].setAttribute("src", newDice2);

var winner = function () {
  if (randomDice1 > randomDice2) {
    return "player 1 wins";
  } else if (randomDice2 > randomDice1) {
    return "player 2 wins";
  } else {
    return "It's a Draw";
  }
};

document.querySelectorAll(".container")[0].querySelector("h1").innerHTML =
  winner();

// console.log(randomDice1, randomDice2);

// console.log(
//   document.querySelectorAll(".container")[0].querySelector("h1").innerHTML
// );
