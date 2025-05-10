import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".es", ".dev", ".io", ".ia"];

  // Función para generar un dominio aleatorio
  function generarDominioAleatorio() {
    const p = pronoun[Math.floor(Math.random() * pronoun.length)];
    const a = adj[Math.floor(Math.random() * adj.length)];
    const n = noun[Math.floor(Math.random() * noun.length)];
    const e = extensions[Math.floor(Math.random() * extensions.length)];
    return p + a + n + e;
  }

  // Evento para el botón
  const btn = document.getElementById("generate-btn");
  const resultDiv = document.getElementById("domain-result");

  btn.addEventListener("click", function () {
    const dominio = generarDominioAleatorio();
    resultDiv.textContent = dominio;
  });
};
