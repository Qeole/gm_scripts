// ==UserScript==
// @name        LeMonde.fr
// @namespace   qeole
// @include     http://www.lemonde.fr/*
// @version     1.0.0
// @grant       none
// ==/UserScript==
let abo = document.getElementsByClassName("droit")[0].childNodes[1];
if (abo) abo.parentNode.removeChild(abo);
let abo = document.getElementById("footer").childNodes[1];
if (abo) abo.parentNode.removeChild(abo);

function killAll(abo, nb=0) {
  while (abo.length > nb) {
    abo[nb].parentNode.removeChild(abo[nb]);
  }
}
let abo = document.getElementsByTagName("aside")[0].childNodes;
killAll(abo, 5);
let abo = document.getElementsByClassName("reco_cross_site_outbrain");
killAll(abo);
let abo = document.getElementsByClassName("toolbar");
killAll(abo);

// Bloc côté sous "les plus partagés"
let i = 30; abo = undefined;
let intAbo = window.setInterval(() => {
  i--;
  abo = document.getElementById("appel_jelec");
  if (i <= 0 || abo != undefined) {
    if (abo != undefined) {
      abo.parentNode.removeChild(abo);
    }
    window.clearInterval(intAbo);
  }
}, 100);

// Bloc sous "lire la suite des réactions"
window.setTimeout(() => {
  let abo = document.getElementsByClassName("grid_10 alpha omega reaction_identifier clearfix")[0];
  if (abo) abo.parentNode.removeChild(abo);
}, 3000);

// Déplacer références dans l'article
let col = document.getElementsByClassName("grid_6 omega col_droite")[0];
let lire = document.getElementsByClassName("lire");
let l = lire.length;
if (l>0) {
  let p = document.createElement("p");
  let text = document.createTextNode("Lectures liées :");
  p.appendChild(text);
  p.style = "margin-top:3em;margin-bottom:2em;font-style:italic;font-size:1.7rem;"
  col.appendChild(p);
  for (let k = 0; k<l; k++) {
    let div = document.createElement("div");
    div.appendChild(lire[0].parentNode.removeChild(lire[0]));
    div.style = "margin-top:1em;margin-bottom:1em;font-weight:bold;font-size:1.7rem;"
    col.appendChild(div);
  }
}