// ==UserScript==
// @name        Menu
// @namespace   qeole
// @description Insert a menu with links based on h1..h6 headers on top of the page
// @include     *
// @version     1.0.0
// @grant       none
// ==/UserScript==
var menu = document.createElement("div");
document.body.insertBefore(menu, document.body.childNodes[0]);

var number=0;

treatNode = function (node, maxDepth) {
  if (/^H[1-6]$/i.test(node.tagName)) {
    var depth = node.tagName.slice(-1);

    if (depth <= maxDepth) {
      number++;
      node.id = "anchor."+depth+"."+number;
      var link = document.createElement("a");
      link.href = "#anchor."+depth+"."+number;
      link.innerHTML = node.innerHTML;
      var entry = document.createElement("div");
      entry.style.marginLeft = ((depth-1)*25)+"px";
      entry.appendChild(link);
      menu.appendChild(entry);
    }
  }
  
  for (var i=0; i<node.childNodes.length; i++) {
    treatNode(node.childNodes[i], maxDepth);
  }
}

treatNode(document.body, 6);