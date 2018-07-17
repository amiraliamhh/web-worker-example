onmessage = function (msg) {
    console.log(msg.data);

    self.postMessage('This message is sent by web worker.', <any>undefined);
}