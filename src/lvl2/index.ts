let ww: any;

if ((<any>window).Worker) {
    console.log("Browser supports web worker.");

    ww = new Worker('./worker.js');
}

function getPrice() {
    ww.postMessage('');
}

ww.onmessage = function (data: any) {
    document.getElementById('price').innerHTML = data.data;
}

