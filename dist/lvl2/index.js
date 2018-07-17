"use strict";

var ww;

if (window.Worker) {
  console.log("Browser supports web worker.");
  ww = new Worker('./worker.js');
}

function getPrice() {
  ww.postMessage('');
}

ww.onmessage = function (data) {
  document.getElementById('price').innerHTML = data.data;
};