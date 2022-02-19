/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  var pinta = ["♦", "♥", "♠", "♣"];
  var numero = [
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
  let random = Math.round(Math.random() * 3);
  let aux = document.querySelectorAll("#pintaCarta");
  let aux2 = document.getElementById("digito");
  if (random == 0 || random == 1) {
    aux[[0]].classList.add("red");
    aux[[1]].classList.add("red");
  }
  aux[0].innerHTML = pinta[random];
  aux[1].innerHTML = pinta[random];
  aux2.innerHTML = numero[Math.round(Math.random() * 12)];
};
