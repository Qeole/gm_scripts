// ==UserScript==
// @name        DragAndDrop DOM nodes 
// @namespace   qeole
// @description Move DOM nodes around with drag and drop… Just testing for fun
// @include     *
// @version     1.0.0
// @grant       none
// ==/UserScript==

// Disable links, they mess up with drag and drop
let a = document.getElementsByTagName("a"); a;
for (let i = 0; i<a.length; i++) {
  a[i].style.pointerEvents = "none";
}


let gN = null;

// On mouse down, get node to move
function mouseDownHandler (aEvent) {
  gN = aEvent.target;
}

// On mouse up, get target and launch node moving
function mouseUpHandler (aEvent) {
  if (aEvent.target != gN) {
    let src = gN.parentNode.removeChild(gN);
    moveNode(aEvent.target, src);
  }
}

// Move the node
function moveNode(aDest, aSrc) {
  try {
    aDest.appendChild(aSrc);
  }
  catch(err) {
    moveNode(aDest.parentNode, aSrc);
  }
}

// Add listeners
document.addEventListener("mousedown", mouseDownHandler);
document.addEventListener("mouseup", mouseUpHandler);
