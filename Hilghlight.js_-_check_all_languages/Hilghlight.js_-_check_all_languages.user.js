// ==UserScript==
// @name        Highlight.js - check all languages
// @namespace   qeole
// @include     https://highlightjs.org/download/
// @version     1.0.0
// @grant       none
// ==/UserScript==
let l = document.getElementsByTagName('input');
for (let i = 1; i < l.length; i++) {
  l[i].checked = 'checked';
};
