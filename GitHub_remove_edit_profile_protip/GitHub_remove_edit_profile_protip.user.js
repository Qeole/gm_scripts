// ==UserScript==
// @name        GitHub remove "edit profile" protip
// @namespace   qeole
// @include     https://github.com/Qeole
// @version     1.0.0
// @grant       none
// ==/UserScript==
document.getElementsByClassName('column three-fourths') [0].removeChild(document.getElementsByClassName('new-user-avatar-cta') [0]);
