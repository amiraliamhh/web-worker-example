"use strict";

if (window.Worker) {
  console.log("Browser supports web worker."); // web worker

  var ww = new Worker('./worker.js');
  ww.postMessage('Hello! I\'m sending this message from index.js');

  ww.onmessage = function (msg) {
    console.log(msg.data);
  };
}