// ==UserScript==
// @name        Wikipedia search Fr to En
// @namespace   qeole
// @description Add a ”Rechercher en anglais” button to Wikipédia:Fr search page
// @include     https://fr.wikipedia.org/wiki/*?search=*
// @include     https://fr.wikipedia.org/w/index.php?search=*
// @version     1.0.0
// @grant       none
// ==/UserScript==

let plug   = document.getElementsByClassName("results-info")[0];
let parent = document.getElementById("mw-search-top-table");


let span = document.createElement("span");
span.style="margin-left:1em;";

function searchInEnglish () {
  let query = window.location.toString();
  query = query.slice(query.indexOf("=")+1, query.indexOf("&"));
  window.location = 'https://en.wikipedia.org/w/index.php?search=' + query;
}
  
let div = document.createElement("div");
div.className="mw-ui-button mw-ui-progressive";
div.style="padding:5px;"
div.appendChild(document.createTextNode("Rechercher en anglais"));

div.addEventListener("click", searchInEnglish);

parent.insertBefore(span, plug);
parent.insertBefore(div, plug);