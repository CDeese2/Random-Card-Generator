/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardGenerator = () => {
  const suit = ["♦", "♥", "♠", "♣"];
  const number = [
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
    "K",
    "A"
  ];

  let ropa = Math.floor(Math.random() * suit.length);
  let numero = Math.floor(Math.random() * number.length);
  let suitValue = suit[ropa];
  let numValue = number[numero];

  const suitHeader = document.querySelector("#suitHeader");
  const suitFooter = document.querySelector("#suitFooter");
  suitHeader.innerText = suitValue;
  suitFooter.innerText = suitValue;

  const theNumber = document.querySelector("#theNumber");
  theNumber.innerText = numValue;

  if (ropa <= 1) {
    suitHeader.style.color = "red";
    suitFooter.style.color = "red";
    theNumber.style.color = "red";
  }

  // let result;
  // return;
};

window.onload = function() {
  cardGenerator();
  // document.querySelector("#the-number").innerHTML = numberGenerator();
  // document.querySelector("#the-suit").innerHTML = suitGenerator();
  // suity.innerText = "the-suit";

  // document.getElementById("♦").style.color = "red";
  // document.getElementById("♥").style.color = "red";
  //need to figure out, if the result is suit array 0 or 1, change color to red
  //if (#the-suit = "♦" || #the-suit = "♥";
  //  CSS FOR font color red)
  //document.querySelector("#the-suit").classList.add("spades");
};
// https://www.w3schools.com/howto/howto_js_add_class.asp
