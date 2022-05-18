/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let generaterandomNumber = () => {
    let number = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexNumber = Math.floor(Math.random() * number.length);
    return number[indexNumber];
  };
  let randomPinta = generateRandomPinta();
  document.querySelector(".top-card").textContent = randomPinta;
  document.querySelector(".bot-card").textContent = randomPinta;
  document.querySelector(".bot-card").classList.add("boca-arriba");

  document.querySelector(".number").innerHTML = generaterandomNumber();

  function generateRandomPinta() {
    let Pinta = ["♦", "♥", "♠", "♣"];
    let indexPinta = Math.floor(Math.random() * Pinta.length);
    return Pinta[indexPinta];
  }

  if (randomPinta == "♦" || randomPinta == "♥") {
    document.querySelector(".top-card").style.color = "red";
    document.querySelector(".bot-card").style.color = "red";
    document.querySelector(".number").style.color = "red";
  }
};
