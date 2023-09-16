/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const simbolo = ["♦", "♥", "♠", "♣"];
  const color = ["red", "black"];
  let simboloAleatorio = simbolo[Math.floor(Math.random() * simbolo.length)];
  let colorAleatorio = color[Math.floor(Math.random() * color.length)];

  document.getElementById("up").innerText = simboloAleatorio;
  document.getElementById("down").innerText = simboloAleatorio;
  document.getElementById("up").style.color = colorAleatorio;
  document.getElementById("down").style.color = colorAleatorio;

  const numeroCentral = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J"];
  document.getElementById("numeroAleatorio").innerText =
    numeroCentral[Math.floor(Math.random() * numeroCentral.length)];
};
