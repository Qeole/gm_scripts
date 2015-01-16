// ==UserScript==
// @name        NextINpact
// @namespace   qeole
// @description NextINpact.com: Adds in Header
// @include     http://www.nextinpact.com/*
// @version     1.0.0
// @grant       none
// ==/UserScript==
let h = document.getElementById("container_ban_pub_jauge");
h.parentNode.removeChild(h);
