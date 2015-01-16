// ==UserScript==
// @name        LeMonde (Une)
// @namespace   qeole
// @include     http://www.lemonde.fr/
// @version     1.0.1
// @grant       none
// ==/UserScript==

// Header
let b = document.getElementById('barre_titre');
let conteneur_haut = b.childNodes[1];
conteneur_haut.removeChild(document.getElementsByClassName('pub pub_oreille') [0]);
conteneur_haut.removeChild(document.getElementsByClassName('pub pub_oreille adroite') [0]);

let logo  = conteneur_haut.childNodes[3].childNodes[1];
let updte = conteneur_haut.childNodes[3].childNodes[3];
// updte.style = "min-height: 20px;line-height: 20px;float: left;margin: 7px 20px 0px;color: #747B83;font-weight: bold;font-size: 12px;"
updte.style = "margin: 7px 20px 0px; font-weight: bold;"

b.parentNode.removeChild(b);

//let h = document.getElementById("header_utilisateur").childNodes[1];
let h = document.getElementById("header_utilisateur").childNodes[1].childNodes[1];
h.insertBefore(updte,h.firstChild);

let a = document.createElement("a");
a.className="logo_lm_small";
a.href="/";
h.insertBefore(a,h.firstChild);

// Abonnement
let abo = document.getElementById("bt_recrut_abo");
if (abo) abo.parentNode.removeChild(abo);
let abo = document.getElementById("appel_jelec");
if (abo) abo.parentNode.removeChild(abo);