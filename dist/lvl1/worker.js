"use strict";

onmessage = function onmessage(msg) {
  console.log(msg.data);
  self.postMessage('This message is sent by web worker.', undefined);
};