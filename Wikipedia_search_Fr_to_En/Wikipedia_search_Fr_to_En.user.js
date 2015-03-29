// ==UserScript==
// @name        Wikipedia switch search
// @namespace   qeole
// @description Add a button to Wikipédia :Fr or :En search page to swith project
// @include     https://*.wikipedia.org/wiki/*?search=*
// @include     https://*.wikipedia.org/w/index.php?search=*
// @version     1.1.0
// @grant       none
// ==/UserScript==

let plug   = document.getElementsByClassName("results-info")[0];
let parent = document.getElementById("mw-search-top-table");


let span = document.createElement("span");
span.style="margin-left:1em;";

function searchInOtherLang () {
  let query = window.location.toString();
  let lang  = query.slice("https://".length,"https://".length+2);
  query = query.slice(query.indexOf("=")+1, query.indexOf("&"));
  window.location = 'https://' + (lang == 'en' ? 'fr' : 'en') +
    '.wikipedia.org/w/index.php?search=' + query;
}
  
let div = document.createElement("div");
div.className="mw-ui-button mw-ui-progressive";
div.style="padding:5px;"
div.appendChild(document.createTextNode("Rechercher dans l'autre langue"));

div.addEventListener("click", searchInOtherLang);

parent.insertBefore(span, plug);
parent.insertBefore(div, plug);